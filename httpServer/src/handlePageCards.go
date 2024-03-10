package main

import (
	"net/http"
)

func handlePageCards(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./templates/pages/cards.tmpl")
}
