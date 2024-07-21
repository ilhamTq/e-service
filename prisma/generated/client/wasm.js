
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  user_opd: 'user_opd',
  user_nama: 'user_nama',
  user_nip: 'user_nip',
  user_nik: 'user_nik',
  user_name: 'user_name',
  user_pass: 'user_pass',
  user_image: 'user_image',
  user_tmp_lahir: 'user_tmp_lahir',
  user_tgl_lahir: 'user_tgl_lahir',
  user_pendidikan_akhir: 'user_pendidikan_akhir',
  user_level: 'user_level',
  user_email: 'user_email',
  user_nohp: 'user_nohp',
  user_alamat: 'user_alamat',
  user_jk: 'user_jk',
  user_ttd: 'user_ttd',
  user_jabatan: 'user_jabatan',
  user_pangkat: 'user_pangkat',
  user_jumlah_anak: 'user_jumlah_anak',
  user_active: 'user_active',
  user_external: 'user_external',
  user_lastip: 'user_lastip',
  user_lastlogin: 'user_lastlogin',
  user_created: 'user_created',
  user_updated: 'user_updated',
  user_deleted: 'user_deleted'
};

exports.Prisma.DasarScalarFieldEnum = {
  dasar_id: 'dasar_id',
  dasar_isi: 'dasar_isi',
  dasar_opd: 'dasar_opd',
  dasar_active: 'dasar_active',
  dasar_created: 'dasar_created',
  dasar_updated: 'dasar_updated',
  dasar_deleted: 'dasar_deleted'
};

exports.Prisma.SptScalarFieldEnum = {
  spt_id: 'spt_id',
  spt_nomor: 'spt_nomor',
  spt_opd: 'spt_opd',
  spt_kota_asal: 'spt_kota_asal',
  spt_kota_tujuan: 'spt_kota_tujuan',
  spt_kota_tujuan2: 'spt_kota_tujuan2',
  spt_tempat_tujuan: 'spt_tempat_tujuan',
  spt_via: 'spt_via',
  spt_tgl_brkt: 'spt_tgl_brkt',
  spt_tgl_kembali: 'spt_tgl_kembali',
  spt_lama: 'spt_lama',
  spt_perihal: 'spt_perihal',
  spt_kategori: 'spt_kategori',
  spt_sumber_dana: 'spt_sumber_dana',
  spt_pj: 'spt_pj',
  spt_pj2: 'spt_pj2',
  spt_dasar: 'spt_dasar',
  spt_status: 'spt_status',
  spt_created: 'spt_created',
  spt_updated: 'spt_updated',
  spt_deleted: 'spt_deleted',
  kotaKota_id: 'kotaKota_id'
};

exports.Prisma.Spt_pegawaiScalarFieldEnum = {
  sp_id: 'sp_id',
  sp_spt: 'sp_spt',
  sp_user: 'sp_user',
  sp_nomor_sppd: 'sp_nomor_sppd'
};

exports.Prisma.NpdScalarFieldEnum = {
  npd_spt_pegawai: 'npd_spt_pegawai',
  npd_tgl: 'npd_tgl',
  npd_nominal: 'npd_nominal',
  npd_created: 'npd_created',
  npd_updated: 'npd_updated'
};

exports.Prisma.BiayaScalarFieldEnum = {
  biaya_komponen: 'biaya_komponen',
  biaya_standard: 'biaya_standard',
  biaya_nilai: 'biaya_nilai',
  biaya_bukti: 'biaya_bukti',
  biaya_created: 'biaya_created',
  biaya_updated: 'biaya_updated',
  biaya_spt_pegawai: 'biaya_spt_pegawai'
};

exports.Prisma.ProvinsiScalarFieldEnum = {
  provinsi_id: 'provinsi_id',
  provinsi_nama: 'provinsi_nama'
};

exports.Prisma.KotaScalarFieldEnum = {
  kota_id: 'kota_id',
  kota_provinsi: 'kota_provinsi',
  kota_nama: 'kota_nama',
  kota_dalam_daerah: 'kota_dalam_daerah',
  kota_created: 'kota_created',
  kota_updated: 'kota_updated',
  kota_deleted: 'kota_deleted'
};

exports.Prisma.LaporanScalarFieldEnum = {
  laporan_id: 'laporan_id',
  laporan_spt_pegawai: 'laporan_spt_pegawai',
  laporan_isi: 'laporan_isi',
  laporan_created: 'laporan_created',
  laporan_updated: 'laporan_updated'
};

exports.Prisma.SettingScalarFieldEnum = {
  setting_id: 'setting_id',
  setting_opd: 'setting_opd',
  setting_value: 'setting_value',
  setting_lastupdate: 'setting_lastupdate'
};

exports.Prisma.SumberdanaScalarFieldEnum = {
  sd_id: 'sd_id',
  sd_tahun: 'sd_tahun',
  sd_opd: 'sd_opd',
  sd_kode_rekening: 'sd_kode_rekening',
  sd_nama_kegiatan: 'sd_nama_kegiatan',
  sd_jumlah: 'sd_jumlah',
  sd_pptk: 'sd_pptk',
  sd_pa: 'sd_pa',
  sd_bendahara: 'sd_bendahara',
  sd_active: 'sd_active',
  sd_created: 'sd_created',
  sd_updated: 'sd_updated',
  sd_deleted: 'sd_deleted'
};

exports.Prisma.OpdScalarFieldEnum = {
  opd_id: 'opd_id',
  opd_nama: 'opd_nama',
  opd_alamat: 'opd_alamat',
  opd_email: 'opd_email',
  opd_telp: 'opd_telp',
  opd_kota: 'opd_kota',
  opd_created: 'opd_created',
  opd_updated: 'opd_updated',
  opd_deleted: 'opd_deleted'
};

exports.Prisma.JabatanScalarFieldEnum = {
  jabatan_id: 'jabatan_id',
  jabatan_opd: 'jabatan_opd',
  jabatan_nama: 'jabatan_nama',
  jabatan_kop_surat: 'jabatan_kop_surat',
  jabatan_kelas_biaya: 'jabatan_kelas_biaya',
  jabatan_kwitansi: 'jabatan_kwitansi',
  jabatan_created: 'jabatan_created',
  jabatan_updated: 'jabatan_updated',
  jabatan_deleted: 'jabatan_deleted'
};

exports.Prisma.KwitansiScalarFieldEnum = {
  kwitansi_spt_pegawai: 'kwitansi_spt_pegawai',
  kwitansi_nomor: 'kwitansi_nomor',
  kwitansi_opd: 'kwitansi_opd',
  kwitansi_created: 'kwitansi_created',
  kwitansi_updated: 'kwitansi_updated'
};

exports.Prisma.KategoriScalarFieldEnum = {
  kategori_id: 'kategori_id',
  kategori_nama: 'kategori_nama',
  kategori_opd: 'kategori_opd',
  kategori_created: 'kategori_created',
  kategori_updated: 'kategori_updated',
  kategori_deleted: 'kategori_deleted'
};

exports.Prisma.StandardScalarFieldEnum = {
  standard_id: 'standard_id',
  standard_kode: 'standard_kode',
  standard_opd: 'standard_opd',
  standard_kota_asal: 'standard_kota_asal',
  standard_kota_tujuan: 'standard_kota_tujuan',
  standard_via: 'standard_via',
  standard_kelas: 'standard_kelas',
  standard_nominal: 'standard_nominal',
  standard_created: 'standard_created',
  standard_updated: 'standard_updated',
  standard_deleted: 'standard_deleted'
};

exports.Prisma.BankScalarFieldEnum = {
  bank_user: 'bank_user',
  bank_name: 'bank_name',
  bank_account: 'bank_account',
  bank_number: 'bank_number'
};

exports.Prisma.Tunjangan_potonganScalarFieldEnum = {
  tp_id: 'tp_id',
  tp_jenis: 'tp_jenis',
  tp_nama: 'tp_nama',
  tp_urutan: 'tp_urutan',
  tp_kelompok: 'tp_kelompok',
  tp_created: 'tp_created',
  tp_update: 'tp_update',
  tp_deleted: 'tp_deleted'
};

exports.Prisma.GajianScalarFieldEnum = {
  gajian_id: 'gajian_id',
  gajian_pegawai: 'gajian_pegawai',
  gajian_bulan: 'gajian_bulan',
  gajian_tahun: 'gajian_tahun',
  gajian_tunjangan_potongan: 'gajian_tunjangan_potongan',
  gajian_nominal: 'gajian_nominal',
  gajian_created: 'gajian_created',
  gajian_updated: 'gajian_updated',
  gajian_deleted: 'gajian_deleted'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.JK = exports.$Enums.JK = {
  L: 'L',
  P: 'P'
};

exports.Prisma.ModelName = {
  users: 'users',
  dasar: 'dasar',
  spt: 'spt',
  spt_pegawai: 'spt_pegawai',
  npd: 'npd',
  biaya: 'biaya',
  provinsi: 'provinsi',
  kota: 'kota',
  laporan: 'laporan',
  setting: 'setting',
  sumberdana: 'sumberdana',
  opd: 'opd',
  jabatan: 'jabatan',
  kwitansi: 'kwitansi',
  kategori: 'kategori',
  standard: 'standard',
  bank: 'bank',
  tunjangan_potongan: 'tunjangan_potongan',
  gajian: 'gajian'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
