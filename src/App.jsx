import Soal1 from './components/InputFormatJudul';
import Soal2 from './components/InputPenghitung';
import {DeretAngka1, DeretAngka2, DeretAngka3} from './components/InputDeretAngka';
import Soal4 from './components/InputKalkulasi';
import './App.css'

function App() {
  return (
    <>
      <>
        <h1>⭐ Technical Test Assesment</h1>
        <h2>Test Logika dan Algoritma</h2>
        <div className="paragraf">
          <ul>
              <li>Diberikan sebuah string yang dapat mengandung huruf, angka, spasi dan tanda baca.</li>
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
              <li>Diberikan sebuah string acak, hitunglah berapa jumlah setiap karakter yang ada dalam string tersebut.</li>
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
              <li>Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak inputan user : </li>
          </ul>

          <div className="subpoin">
            <ul>
              <li>1 4 9 16 25 36 49 64 81 100 ...</li>
              <li>1 2 5 10 17 26 37 50 65 82 ...</li>
              <li>0 0 1 2 4 7 12 20 33 54 ...</li>
              
            </ul>
            <div className="space-jawaban">
              <h5>Jawaban</h5>
              <DeretAngka1 />
              <DeretAngka2 />
              <DeretAngka3 />
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default App
