package pageHandlers

import (
	"net/http"
)

func HandleCardsPage(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./templates/pages/cards.tmpl")
}
