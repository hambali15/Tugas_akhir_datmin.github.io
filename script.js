// ALGORITMA

// Munculkan Popup box ketika tombol start di klik
const start = document.getElementById("mulai");
start.addEventListener("click", handleClick);

function handleClick() {
    // Sebuah alert pemberitahuan untuk menginputkan atribut
    alert("Silahkan Masukkan dari tiap atribut ke dalam form berikut ini !!");

    // Siapkan variabel agar nilainya bisa dikembalikan
    let age;
    let income;
    let student;
    let credit_rating;
    // Tampilkan prompt agar user bisa menginputkan beberapa atribut
    // Function per atribut

    // Age
    function atrbAge() {
        age = prompt("Nilai dari atribut Age ?");
        if (age) {
            return age;
        } else {
            age = null;
            atrbAge();
        }
    }

    // Income
    function atrbIncome() {
        income = prompt("Nilai dari atribut Income ? (low/medium/high)");
        if (income) {
            return income;
        } else {
            income = null;
            atrbIncome();
        }
    }

    // Student
    function atrbStudent() {
        student = prompt("Nilai dari atribut Student ? (yes/no)");
        if (student) {
            return student;
        } else {
            student = null;
            atrbStudent();
        }
    }

    // Credit Rating
    function atrbCreditrating() {
        credit_rating = prompt("Nilai dari atribut Credit Rating ? (fair/excellent)");
        if (credit_rating) {
            return credit_rating;
        } else {
            credit_rating = null;
            atrbCreditrating();
        }
    }

    // Gunakan perulangan agar bisa kembali ke inputan awal jika ada yang keliru
    for (let i = 0; i >= -1; i++) {
        // Panggil function per atribut
        atrbAge();
        atrbIncome();
        atrbStudent();
        atrbCreditrating();

        // beri pertanyaan untuk mengkonfirmasi inputan
        let konfirM = confirm("Apakah data yang anda masukkan sudah benar ?");
        if (konfirM == true) {
            break;
        } else {
            continue;
        }
    }

    // Terjadi proses algoritma decision tree menggunakan pengkondisian
    let hasil;
    if (age <= 30) {
        if (student == "yes") {
            if (credit_rating == "excellent") {
                hasil = "yes";
            } else {
                hasil = "no";
            }
        } else {
            hasil = "no";
        }
    } else if (age > 30 && age <= 40) {
        hasil = "yes";
    } else {
        if (credit_rating == "fair") {
            if (student == "yes") {
                if (income == "low") {
                    hasil = "yes";
                } else {
                    hasil = "no";
                }
            } else {
                hasil = "yes";
            }
        } else {
            hasil = "no";
        }
    }

    // Tampilkan hasil kedalam html
    const tampilHasil = document.getElementById("hasil");
    tampilHasil.innerHTML = hasil;
}
