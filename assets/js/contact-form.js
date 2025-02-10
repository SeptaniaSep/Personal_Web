function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneno = document.getElementById("phoneno").value; // Pastikan field ini ada di HTML
    let subject = document.getElementById("subject").value;
    let skill = document.getElementById("skill").value;
    let message = document.getElementById("message").value;

    alert( `name : ${name}
            email : ${email}
            phoneno : ${phoneno}
            ` )

    // Definisikan email tujuan (ubah sesuai kebutuhan Anda)
    let emailTujuan = "hafidzsyahn@gmail.com";

    // Buat elemen <a> untuk mailto
    let a = document.createElement("a");
    a.href = `mailto:${emailTujuan}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Halo, nama saya ${name}. 
         Silahkan hubungi saya di ${email}. 
         Nomor telepon saya adalah ${phoneno}.
         Skill saya adalah ${skill}. 
         Berikut adalah pesan saya: ${message}`
    )}`;

    // Trigger klik pada elemen <a>
    a.click();
}