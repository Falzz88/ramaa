// LOGIN DATA (bisa kamu ubah)
const user = "admin";
const pass = "123";

// DATA BUKU
const koleksiBuku = [
    {
        judul: "one piece",
        status: "Tersedia",
        peminjam: "-",
        img: "img/One piece icon.jpg"
    },
    {
        judul: "Black Clover",
        status: "Tersedia",
        peminjam: "-",
        img: "img/Black Cover.jpg"
    },
    {
        judul: "Dilan",
        status: "Dipinjam",
        peminjam: "Ipeh",
        img : "img/Dilan.jpg"
    }
];

// LOGIN
function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (u === user && p === pass) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainApp").style.display = "block";
        renderBuku();
    } else {
        document.getElementById("error").innerText = "Username atau password salah!";
    }
}

// RENDER
function renderBuku() {
    const grid = document.getElementById("bookGrid");
    grid.innerHTML = "";

    koleksiBuku.forEach((item, index) => {
        const card = document.createElement("div");
        const tersedia = item.status === "Tersedia";

        card.className = "card ${tersedia ? 'ready' : 'out'};"

        card.innerHTML = `
            <img src="${item.img}">
            <h3>${item.judul}</h3>
            <p>Status: ${item.status}</p>
            <p>Peminjam: ${item.peminjam}</p>
        `;

        card.onclick = () => pinjam(index);

        grid.appendChild(card);
    });
}

// PINJAM
function pinjam(index) {
    const nama = document.getElementById("peminjam").value;
    if (!nama) return alert("Isi nama dulu!");

    let buku = koleksiBuku[index];

    if (buku.status === "Tersedia") {
        buku.status = "Dipinjam";
        buku.peminjam = nama;
        alert("Berhasil meminjam!");
    } else {
        alert("Sudah dipinjam oleh " + buku.peminjam);
    }

    renderBuku();
}