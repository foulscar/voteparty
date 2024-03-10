package main

import (
	"fmt"
	"os"
	"log"
	"time"
	"io"
	"net/http"
)

type timeData struct {
	Time string
}

func handleGetCountdown(w http.ResponseWriter, r *http.Request) {
	now := time.Now()
	sixAMToday := time.Date(now.Year(), now.Month(), now.Day(), 6, 0, 0, 0, now.Location())
	sixAMTomorrow := time.Date(now.Year(), now.Month(), now.Day()+1, 6, 0, 0, 0, now.Location())
	if now.Before(sixAMToday) {
		io.WriteString(w, sixAMToday.String())
	} else {
		io.WriteString(w,sixAMTomorrow.String())
	}
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.HandleFunc("/getCountdown", handleGetCountdown)
	http.HandleFunc("/pages/cards", handlePageCards)

	fmt.Fprint(os.Stdout, "Starting Server at Port 8080\n")
	log.Fatal(os.Stdout, http.ListenAndServe(":8080", nil))
}
