import Soal1 from './components/InputFormatJudul';
import Soal2 from './components/InputPenghitung';
import Soal3 from './components/InputDeretAngka';
import Soal4 from './components/InputKalkulasi';
import './App.css'

function App() {
  return (
    <>
      <h1>⭐ Technical Test Assesment</h1>

      <div className="tesContainer">
        <h2>Test Logika dan Algoritma</h2>
        <div className="paragraf">
          <ul>
              <li><h3>Diberikan sebuah string yang dapat mengandung huruf, angka, spasi dan tanda baca.</h3></li>
          </ul>

          <div className="subpoin">
            <ol>
              <li>Ubahlah format string tersebut menjadi format penulisan judul yang hanya menerima huruf dan angka</li>
              <li>Ubahlah format string tersebut menjadi format penulisan biasa dengan mengkonversi
                spasi menjadi “-“ (strip)
              </li>
            </ol>
            <div className="space-jawaban">
              <h5>Jawaban</h5>
              <Soal1 />
            </div>
          </div>
        </div>

        <div className="paragraf">
          <ul>
              <li><h3>Diberikan sebuah string acak, hitunglah berapa jumlah setiap karakter yang ada dalam string tersebut.</h3></li>
          </ul>

          <div className="subpoin">
            <div className="space-jawaban">
              <h5>Jawaban</h5>
              <Soal2 />
            </div>
          </div>
        </div>
        
        <div className="paragraf">
          <ul>
              <li><h3>Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak inputan user : </h3></li>
          </ul>

          <div className="subpoin">
            <ul>
              <li>1 4 9 16 25 36 49 64 81 100 ...</li>
              <li>1 2 5 10 17 26 37 50 65 82 ...</li>
              <li>0 0 1 2 4 7 12 20 33 54 ...</li>
              
            </ul>
            <div className="space-jawaban">
              <h5>Jawaban</h5>
              <Soal3 />
            </div>
          </div>
        </div>
        
        <div className="paragraf">
          <ul>
              <li><h3>Diberikan sebuah deret angka random oleh user berupa string (dipisahkan oleh spasi atau koma (,), ex. “20, 21, 80, 21, 55, 31, 22” ) hitunglah : </h3></li>
          </ul>

          <div className="subpoin">
            <ul>
              <li>nilai terbesar</li>
              <li>nilai terkecil</li>
              <li>nilai rata-rata</li>
              
            </ul>
            <div className="space-jawaban">
              <h5>Jawaban</h5>
              <Soal4 />
            </div>
          </div>
        </div>
      </div>

      <div className="tesContainer">

      </div>
    </>
  )
}

export default App
