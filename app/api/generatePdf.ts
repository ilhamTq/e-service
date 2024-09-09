// pages/api/generatePdf.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import jk from '@/lib/jk';
import agama from '@/lib/agama';
import puppeteer from 'puppeteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Fetch data berdasarkan id dari database
  const response = await fetch(`http://localhost:3000/api/belum_nikah/${id}`);
  const data = await response.json();
  

  // Template HTML untuk PDF 
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Surat Keterangan Belum Menikah</title>
        <style>
          body {
            font-family: "Times New Roman", Times, serif;
            margin: 0;
            padding: 0;
            background-color: #fff;
          }
          .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 2px;
            border-bottom: 5px solid black;
          }
          .header::after {
            content: "";
            display: block;
            width: 100%;
            border-bottom: 1px solid black;
            margin-top: -3px;
          }
          .header img {
            width: 65px;
            height: auto;
            position: absolute;
            left: 0;
            top: 0;
          }
          .header p {
            margin: 5px 0;
            font-size: 16px;
          }
          .header .address {
            margin-top: 0px;
            font-size: 14px;
            letter-spacing: 2px;
          }
          .content {
            margin-top: 30px;
          }
          .content h2 {
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
            font-size: 18px;
          }
          .content p {
            font-size: 16px;
            margin-top: -5px;
            margin-bottom: 10px 0;
            line-height: 1.6;
          }
          .details {
            margin-left: 30px;
            margin-top: 20px;
          }
          .details p {
            margin: 10px 0;
            line-height: 1.8;
          }
          .details table {
            width: 100%;
            line-height: 1.8;
          }
          .details td {
            vertical-align: top;
          }
          .details td:first-child {
            width: 3%;
          }
          .details td:nth-child(2) {
            width: 35%;
          }
          .details td:nth-child(3) {
            width: 2%;
          }
          .signature {
            margin-top: 60px;
            text-align: right;
            margin-right: 50px;
          }
          .signature p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="http://localhost:3000/assets/image/logo.png" alt="Logo Pemerintah" />
            <h1 style="font-size: 18px; font-weight: bold; margin: 0">
              PEMERINTAH KABUPATEN KUTAI KARTANEGARA
            </h1>
            <h1 style="font-size: 18px; font-weight: bold; margin: 0">
              KECAMATAN TENGGARONG SEBERANG
            </h1>
            <h1
              style="
                font-size: 24px;
                font-weight: bold;
                margin: 0;
                letter-spacing: 5px;
              "
            >
              DESA KERTA BUANA
            </h1>
            <p class="address">
              Jl. Raya Utama Dusun Budi Daya RT. 22 Blok D Kode Pos 75262
            </p>
          </div>

          <div class="content">
            <h2>SURAT KETERANGAN BELUM MENIKAH</h2>
            <p style="text-align: center">
              Nomor: ____ /64.02.16.2005-PD/Ket./___/ 2024
            </p>

            <p style="text-align: justify">
              Yang bertanda tangan dibawah ini Kepala Desa Kerta Buana Kecamatan
              Tenggarong Seberang Kabupaten Kutai Kartanegara menerangkan bahwa :
            </p>

            <div class="details">
              <table>
                <tr>
                  <td></td>
                  <td>Nama</td>
                  <td>:</td>
                  <td>${data.nikah_nama}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Jenis Kelamin</td>
                  <td>:</td>
                  <td>${jk.find((a) => a.id === parseInt(data.nikah_jk, 10))?.text || 'undefined'}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Tempat / Tgl. Lahir</td>
                  <td>:</td>
                  <td>${data.nikah_tempat_lahir} / ${new Date(data.nikah_tgl_lahir).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Suku / Bangsa</td>
                  <td>:</td>
                  <td>${data.nikah_suku}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Agama</td>
                  <td>:</td>
                  <td>${agama.find((a) => a.id === data.nikah_agama)?.text || 'undefined'}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>No. KTP / Pengenal</td>
                  <td>:</td>
                  <td>${data.nikah_ktp}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>${data.nikah_alamat}</td>
                </tr>
              </table>
            </div>

            <p style="text-align: justify">
              Keterangan ini diberikan untuk <b>Persyaratan</b> ${data.nikah_kepentingan}
            </p>

            <p style="text-align: justify">
              Demikian keterangan ini dibuat dengan sebenarnya untuk dapat
              dipergunakan sebagaimana mestinya.
            </p>
          </div>

          <div class="signature">
            <p>Kerta Buana,______ 2024</p>
            <p>Kepala Desa Kerta Buana</p>
            <img
              style="width: 120px; margin-right: 20px"
              src="http://localhost:3000/assets/image/barcode.png"
              alt="bar"
            />
            <p style="position: relative; left: 5px">I Dewa Ketut Adi Basuki</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Generate PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: 'A4' });


  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="suket_belum_nikah_${id}.pdf"`);
  res.send(pdfBuffer);
}
