function getSentence() {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const birthplace = document.getElementById("birthplace").value;
    const height = document.getElementById("height").value;
    const hobbys = document.getElementById("hobbys").value;
    const games = document.getElementById("games").value;
    const food = document.getElementById("food").value;
    const season = document.getElementById("season").value;
    const vacation = document.getElementById("vacation").value;

    console.log("Mein Name ist " + name + " " + lastname + ", ich bin " + age + " Jahre alt, " + height + "m groß und wurde geboren in " + birthplace + `. In meiner Freizeit mache ich gern die folgenden Dinge: ${hobbys} - und ich spiele am Computer gern ${games}. Mein liebstes Gericht ist ${food}, die beste Jahreszeit ist ${season} und der beste Ort für den Urlaub ist ${vacation}!`);

    document.getElementById("result").innerHTML = "Mein Name ist " + name + " " + lastname + ", ich bin " + age + " Jahre alt, " + height + "m groß und wurde geboren in " + birthplace + `. In meiner Freizeit mache ich gern die folgenden Dinge: ${hobbys} - und ich spiele am Computer gern ${games}. Mein liebstes Gericht ist ${food}, die beste Jahreszeit ist ${season} und der beste Ort für den Urlaub ist ${vacation}!`
}