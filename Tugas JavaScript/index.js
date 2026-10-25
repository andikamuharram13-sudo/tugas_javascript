//tugas 1
let namaSiswa = "Davin Andika Muharram";

//tugas 2
const nilaiUjian = 95;

//tugas 3
function cekKelulusan(nilaiUjian) {

  if(nilaiUjian >= 80) {
    return "Lulus";
  } else if (nilaiUjian >= 75) {
    return "Nilai pas KKM";
  } else {
    return "Remedial";
  }
}

//tugas 4
let statusSiswa = cekKelulusan(nilaiUjian);

console.log(`Siswa bernama ${namaSiswa} mendapat nilai ${nilaiUjian}. Status: ${statusSiswa}.`);