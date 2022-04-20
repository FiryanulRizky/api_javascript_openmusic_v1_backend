# Restful api untuk Aplikasi Open Music v1.0

# Studi Kasus
- Mengembangkan restful api untuk aplikasi OpenMusic dari sisi backend.
- Api ini dikembangkan secara berangsur hingga nantinya memiliki fitur seperti menambahkan lagu, membuat playlist, memasukan lagu ke dalam playlist, hingga membagikan playlist kepada pengguna lain.
- Saat ini api untuk aplikasi OpenMusic ini sudah ditahap versi pertama dengan dilengkapi fitur menambah, menghapus, dan mengubah data album dan lagu yang dimasukkan oleh pengguna.

# Tools Development
- Node.js v17.2.0
- HAPI js Plugin v20.2.1
- JOI Plugin v17.6.0 (Data Validation)
- RDBMS PostgreSQL v14.2 (Sudah Mendukung Migrasi)

# Uji Postman
Dikarenakan masih sebatas berjalan di sisi backend, maka pengujian restful api dilakukan dengan aplikasi Postman (untuk berkas pengujian ada di folder PostmanTest, lakukan impor dan jalankan pengujian manual). Berikut adalah hasil pengujian yang telah dilakukan sejauh ini :

# 1. Uji Postman untuk Album
![2  Add Album with Valid Payload](https://user-images.githubusercontent.com/60762912/164225768-8f84fc79-7819-4f33-a8fc-d73069b3868c.PNG)
![3  Get Detail Album with Invalid Id](https://user-images.githubusercontent.com/60762912/164226041-0a6f1b19-d112-449b-8798-fb35a797f22d.PNG)
![4  Get Detail Album with Valid Id](https://user-images.githubusercontent.com/60762912/164226068-dd422911-88ad-4c00-89ee-0da7e51854b1.PNG)
![6  Edit Album with Invalid Id](https://user-images.githubusercontent.com/60762912/164226073-2901e720-941a-46ce-a3e2-98eff5fc9b99.PNG)
![7  Edit Album with Valid Id](https://user-images.githubusercontent.com/60762912/164226076-7e4c7c39-1c1d-4d3c-ba80-bf573aada493.PNG)
![8  Delete Album with Invalid Id](https://user-images.githubusercontent.com/60762912/164226078-9b1c5431-22a4-4a79-ba9c-2509aef4504f.PNG)

# 2. Uji Postman untuk Song
![2  Add Song with Valid Payload](https://user-images.githubusercontent.com/60762912/164226304-87b272d8-9dcd-4099-b935-b324038678d3.PNG)
![3   No Test  Add Song with Valid Payload](https://user-images.githubusercontent.com/60762912/164226307-081adebe-a138-479c-8e3a-77ceb5e58c95.PNG)
![4  Get All Songs](https://user-images.githubusercontent.com/60762912/164226310-9bc2ca5d-5296-4406-8a5c-08eca2aeeabd.PNG)
![5  Get Detail Songs with Invalid Id](https://user-images.githubusercontent.com/60762912/164226313-5fa5fce2-5da8-497d-b467-350b87c83961.PNG)
![6  Get Detail Songs with Valid Id](https://user-images.githubusercontent.com/60762912/164226318-cd1d05c6-01e1-415a-b1de-5071188e39cd.PNG)
![8  Edit Song with Invalid Id](https://user-images.githubusercontent.com/60762912/164226320-cebb2c3e-8466-4c62-8f58-0f3104b6d785.PNG)
![9  Edit Song with Valid Id](https://user-images.githubusercontent.com/60762912/164226322-d9f685ad-15fe-461d-aa70-580f3385d11f.PNG)
![10  Delete Song with Invalid Id](https://user-images.githubusercontent.com/60762912/164226337-7b15ee9f-af30-4d38-ab20-eea64dc7b4ee.PNG)

# Uji Postman Prerequisite
![1  Add Album](https://user-images.githubusercontent.com/60762912/164226586-1cd11804-c575-4d22-aa3a-d61e7585fbfc.PNG)
![2  Add Song A with Album Id](https://user-images.githubusercontent.com/60762912/164226593-3bcd5bdd-967a-4d80-bcd5-05da1a7d1781.PNG)
![3  Add Song B with Album Id](https://user-images.githubusercontent.com/60762912/164226599-46a6938d-1389-448d-8564-e2f4dece1d90.PNG)
![4  Get Detail Album which Contains Songs](https://user-images.githubusercontent.com/60762912/164226608-d455772f-7eb8-4377-bde1-49b775c9aad0.PNG)

# Uji Postman untuk Query Parameter
![1  Add Song A](https://user-images.githubusercontent.com/60762912/164226772-e5089af7-2979-42ba-a84c-2979c9597829.PNG)
![2  Add Song B](https://user-images.githubusercontent.com/60762912/164226785-5f4c9df6-0b06-44ea-8866-124cd7e3c2a7.PNG)
![3  Add Song C](https://user-images.githubusercontent.com/60762912/164226797-e390b24b-595d-4b07-8945-d975496da33a.PNG)
![4  Add Song D](https://user-images.githubusercontent.com/60762912/164226804-c40ecf74-9da8-4809-b42e-c732e0dc1f2f.PNG)
![5  Seach Song using Title](https://user-images.githubusercontent.com/60762912/164226808-2b4efc9d-a067-489e-b9bf-f1d93764b488.PNG)
![6  Seach Song using Performer](https://user-images.githubusercontent.com/60762912/164226819-787aef8c-4ccc-451c-9855-7f03ab4ed530.PNG)
![7  Seach Song using Title and Performer](https://user-images.githubusercontent.com/60762912/164226824-65fd036d-6e72-4bb8-a5fd-1e4a8bfdc8b2.PNG)
![8  Delete Song A](https://user-images.githubusercontent.com/60762912/164226828-41d4e6f1-4ff8-49e1-8b4b-ca39f7c42b3b.PNG)
![9  Delete Song B](https://user-images.githubusercontent.com/60762912/164226830-8be404ed-6254-47d8-a380-c42e390f7145.PNG)
![10  Delete Song C](https://user-images.githubusercontent.com/60762912/164226834-e1064b90-e1f5-4050-b027-3a8c8850d8a3.PNG)
![11  Delete Song D](https://user-images.githubusercontent.com/60762912/164226845-f5a8440b-4f37-4fd7-8af3-16215707f05f.PNG)
 
