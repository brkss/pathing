package main

import (
	"fmt"
	"log"
	"net/http"
)

func HomePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Home Page !")
}

func WSEndPoint(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "WS end point !")
}

func setupRoutes() {
	http.HandleFunc("/", HomePage)
	http.HandleFunc("/ws", WSEndPoint)
}

func main() {

	setupRoutes()
	fmt.Println("🚀 Starting Server 127.0.0.1:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Can't start server : ", err)
	}
}
