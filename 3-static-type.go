package main

import (
	"fmt"
	"strconv"
)

func main() {
	var myAge int = 18

	// int + string = error
	// string + string = "181"
	fmt.Println(strconv.Itoa(myAge) + "1")

	// myAge = 18.5
}
