document.addEventListener("DOMContentLoaded", function () {
  // Result Category

  const resultCategoryArticle1 = "Hasil BMI kurang dari 18.5";
  const resultCategoryArticle2 = "Hasil BMI diantara 18.5 sampai 24.99";
  const resultCategoryArticle3 = "Hasil BMI diantara 25 sampai 30 atau lebih";

  const descriptionCategoryArticle1 =
    "Anda berada dalam kategori Kekurangan Berat Badan. Orang yang kekurangan berat badan mungkin tidak mendapatkan cukup nutrisi penting seperti vitamin, mineral, dan protein. Ini bisa menyebabkan berbagai masalah kesehatan. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
  const descriptionCategoryArticle2 =
    "Anda berada dalam kategori Normal (ideal). Rentang ini menunjukkan bahwa berat badan Anda seimbang dengan tinggi badan Anda. Ini dianggap sebagai berat badan yang sehat. Orang dengan BMI dalam rentang ini umumnya memiliki risiko yang lebih rendah terhadap masalah kesehatan terkait berat badan, seperti penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi.";
  const descriptionCategoryArticle3 =
    "Anda berada dalam kategori Kelebihan berat badan atau Kegemukan (Obesitas). Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";

  // Result Information

  const titleInformation1 = "Penyebab Kekurangan Berat Badan";
  const titleInformation2 = "Tips Gaya Hidup Sehat";
  const titleInformation3 = "Beberapa Penyakit yang berasal dari kegemukan";

  const descriptionInformation1 =
    "Metabolisme Tinggi, Penyakit Kronis, Masalah Pencernaan, Pola Makan Tidak Seimbang";
  const descriptionInformation2 =
    "Nutrisi Makanan, Aktivitas Fisik, Pola Tidur, Workout";
  const descriptionInformation3 =
    "Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis";

  // Form BMI

  const bmiForm = document.getElementById("bmiForm");

  // Result BMI

  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");

  // Result Category

  const resultCategoryArticle = document.getElementById(
    "resultCategoryArticle"
  );
  const descriptionCategoryArticle = document.getElementById(
    "descriptionCategoryArticle"
  );

  // Result Information

  const titleInformation = document.getElementById("titleInformation");
  const descriptionInformation = document.getElementById(
    "descriptionInformation"
  );

  //   Function Button Submit

  bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    const bmi = weight / (height * height);
    let resultCategoryArticles = "";
    let descriptionCategoryArticles = "";
    let titleInformations = "";
    let descriptionInformations = "";
    let category = "";

    // BMI Condition

    if (bmi < 18.5) {
      resultCategoryArticles = resultCategoryArticle1;
      descriptionCategoryArticles = descriptionCategoryArticle1;
      titleInformations = titleInformation1;
      descriptionInformations = descriptionInformation1;
      category = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.99) {
      resultCategoryArticles = resultCategoryArticle2;
      descriptionCategoryArticles = descriptionCategoryArticle2;
      titleInformations = titleInformation2;
      descriptionInformations = descriptionInformation2;
      category = "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.99) {
      resultCategoryArticles = resultCategoryArticle3;
      descriptionCategoryArticles = descriptionCategoryArticle3;
      titleInformations = titleInformation3;
      descriptionInformations = descriptionInformation3;
      category = "Kelebihan berat badan";
    } else {
      resultCategoryArticles = resultCategoryArticle3;
      descriptionCategoryArticles = descriptionCategoryArticle3;
      titleInformations = titleInformation3;
      descriptionInformations = descriptionInformation3;
      category = "Kegemukan (Obesitas)";
    }

    // Print in html

    bmiValue.textContent = bmi.toFixed(2);
    bmiCategory.textContent = category;
    resultCategoryArticle.textContent = resultCategoryArticles;
    descriptionCategoryArticle.textContent = descriptionCategoryArticles;
    titleInformation.textContent = titleInformations;
    descriptionInformation.textContent = descriptionInformations;
  });
});
