'use client';
import IconDownload from '@/components/icon/icon-download';
// import IconPencil from '@/components/icon/icon-pencil';
// import IconPlus from '@/components/icon/icon-plus';
import IconTrashLines from '@/components/icon/icon-trash-lines';
import IconX from '@/components/icon/icon-x';
import bulan from '@/lib/bulan';
import { GajianBulananSchema } from '@/src/schema/gajian_bulanan';
// import { IRootState } from '@/store';
import { Dialog, Transition } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
// import clsx from 'clsx';
import { DataTable } from 'mantine-datatable';
import { Fragment, useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
// import { useSelector } from 'react-redux';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { z } from 'zod';
import { formatNumber } from '@/lib/format_number';
import Link from 'next/link';
import IconArrowBackward from '@/components/icon/icon-arrow-backward';
import rekapGaji from '@/lib/generate/rekapGaji';
import { deleteGajiPegawai } from '../action';
type Inputs = z.infer<typeof GajianBulananSchema>;
interface LaporanParams {
    params?: {
        id: any;
    };
}

const TableLaporan = ({ params }: LaporanParams) => {
    // const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    let total = 0;
    // const tahun_now = new Date().getFullYear();
    // const tahun_list = Array.from({ length: 10 }, (value, index) => tahun_now - index);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [data, setData] = useState<{ user_id: number; user_nama: string; nominal: number; ttd_sumberdana: number }[]>();
    const [detail, setDetail] = useState<{
        user_id: number;
        user_nama: string;
        jabatan: { jabatan_nama: string };
        ttd_sumberdana: number;
        gajian: { gajian_id: number; gajian_nominal: number; tunjangan_potongan: { tp_nama: string; tp_jenis: number } }[];
    }>();
    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        // defaultValues: { jabatan_nama: edit?.jabatan_nama, jabatan_kop_surat: edit?.jabatan_kop_surat, jabatan_kelas_biaya: edit?.jabatan_kelas_biaya, jabatan_kwitansi: edit?.jabatan_kwitansi },
        resolver: zodResolver(GajianBulananSchema),
    });

    const getData = async () => {
        setFetching(true);
        const res = await fetch(`/api/laporan/bulan/${params?.id[0]}/${params?.id[1]}`);
        const result = await res.json();
        setData(result.data);
        setFetching(false);
    };

    const getDetail = async (user_id: number) => {
        total = 0;
        const res = await fetch(`/api/laporan/pegawai/${user_id}/${params?.id[0]}/${params?.id[1]}`);
        const result = await res.json();
        // console.log(result.data);
        setDetail(result.data);
        setShow(true);
    };

    // const onFormError: SubmitErrorHandler<any> = (e) => {
    //     console.log(e);
    // };

    // const processForm: SubmitHandler<Inputs> = async (data) => {
    //     setLoading(true);
    //     const formData = new FormData();
    //     const postData = JSON.stringify(data);
    //     formData.append('postData', postData);
    //     formData.append('file', data.gajian_file[0]);
    //     // const result = await saveGajian(formData);
    //     const result: any = {};
    //     // console.log(result);
    //     if (!result) {
    //         console.log('Something went wrong');
    //         return;
    //     }

    //     if (result.error) {
    //         setShow(false);
    //         showAlert('error', 'Data gagal simpan');
    //         return;
    //     }
    //     setLoading(false);
    //     reset({});
    //     setShow(false);
    //     showAlert();
    //     // getJabatan();
    // };

    const hapusGaji = async (user_id: number) => {
        const res = await deleteGajiPegawai(user_id, Number(params?.id[0]), Number(params?.id[1]));
        getData();
        showAlert('success', 'Data berhasil dihapus');
    };

    const showAlert = async (jenis: SweetAlertIcon = 'success', pesan = 'Data berhasil disimpan') => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: jenis,
            title: pesan,
            padding: '10px 20px',
        });
    };

    useEffect(() => {
        getData();
    }, []);

    //Skin: Hover
    // const [page1, setPage1] = useState(1);
    // const [initialRecords1, setInitialRecords1] = useState(rowData);
    // const [recordsData1, setRecordsData1] = useState(initialRecords1);

    return (
        <div className="panel">
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">
                    Laporan Gaji Per Bulan {bulan.find((a) => a.id === Number(params?.id[0]))?.label} {params?.id[1]}
                </h5>
                <div className="flex items-center gap-5 ltr:ml-auto rtl:mr-auto">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center">
                        <Link href="/laporan" className="btn btn-primary">
                            <IconArrowBackward className="ltr:mr-2 rtl:ml-2" />
                            Kembali
                        </Link>
                    </div>
                    {/* <input type="text" className="form-input w-auto" placeholder="Search..." value={search1} onChange={(e) => setSearch1(e.target.value)} /> */}
                </div>
            </div>
            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className="table-hover whitespace-nowrap"
                    records={data}
                    columns={[
                        { accessor: 'gajian_pegawai', title: 'ID', render: ({ nominal }, recordIndex) => recordIndex + 1 },
                        {
                            accessor: 'user_nama',
                            title: 'Nama Personil',
                            render: ({ user_nama, user_id, ttd_sumberdana }) => (
                                <span className="cursor-pointer" onClick={async () => getDetail(user_id)}>
                                    {user_nama}
                                </span>
                            ),
                        },
                        { accessor: 'jabatan_nama', title: 'Jabatan' },
                        { accessor: 'nominal', title: 'Total', textAlignment: 'right', render: ({ nominal }) => formatNumber(nominal) },
                        {
                            accessor: 'action',
                            title: 'Action',
                            width: '200px',
                            render: ({ user_id, user_nama, ttd_sumberdana }) => (
                                <div className="mx-auto flex w-max items-center gap-2">
                                    <span
                                        className="cursor-pointer"
                                        onClick={() => rekapGaji({ user_id: user_id, bln: Number(params?.id[0]), tahun: Number(params?.id[1]), sumberdana: ttd_sumberdana })}
                                    >
                                        <IconDownload />
                                    </span>
                                    <span className="cursor-pointer" onClick={() => hapusGaji(user_id)}>
                                        <IconTrashLines className="text-danger" />
                                    </span>
                                </div>
                            ),
                        },
                    ]}
                    idAccessor="gajian_pegawai"
                    fetching={fetching}
                    // totalRecords={initialRecords1.length}
                    // recordsPerPage={100}
                    // page={page1}
                    // onPageChange={(p) => setPage1(p)}
                    // recordsPerPageOptions={PAGE_SIZES}
                    // onRecordsPerPageChange={setPageSize1}
                    minHeight={200}
                    // paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
            <Transition appear show={show} as={Fragment}>
                <Dialog
                    as="div"
                    open={show}
                    onClose={() => {
                        setShow(false);
                        reset({});
                    }}
                >
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="fadein_right_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-start justify-center px-4">
                            <Dialog.Panel className={`panel animate__animated animate__slideInDown my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 p-5 text-black dark:text-white-dark`}>
                                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                    <h5 className="text-lg font-bold">Detail Tunjangan dan Potongan</h5>
                                    <button onClick={() => setShow(false)} type="button" className="text-white-dark hover:text-dark">
                                        <IconX />
                                    </button>
                                </div>
                                <div className="p-5">
                                    <div className="mb-2 grid grid-cols-12 gap-4">
                                        <div className="col-span-4">Nama</div>
                                        <div className="col-span-8">: {detail?.user_nama}</div>
                                    </div>
                                    <div className="mb-2 grid grid-cols-12 gap-4">
                                        <div className="col-span-4">Jabatan</div>
                                        <div className="col-span-8">: {detail?.jabatan?.jabatan_nama}</div>
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold">Tunjangan</h3>
                                    {detail?.gajian
                                        ?.filter((i) => i.tunjangan_potongan.tp_jenis === 1)
                                        .map((a) => {
                                            total += a.gajian_nominal;
                                            return (
                                                <div className="mb-2 grid grid-cols-12 gap-4" key={a.gajian_id}>
                                                    <div className="col-span-4">- {a.tunjangan_potongan.tp_nama}</div>
                                                    <div className="col-span-1">:</div>
                                                    <div className="col-span-7 text-right">{formatNumber(a.gajian_nominal)}</div>
                                                </div>
                                            );
                                        })}
                                    <h3 className="mt-5 text-lg font-bold">Potongan</h3>
                                    {detail?.gajian
                                        ?.filter((i) => i.tunjangan_potongan.tp_jenis === 2)
                                        .map((a) => {
                                            total -= a.gajian_nominal;
                                            return (
                                                <div className="mb-2 grid grid-cols-12 gap-4" key={a.gajian_id}>
                                                    <div className="col-span-4">- {a.tunjangan_potongan.tp_nama}</div>
                                                    <div className="col-span-1">:</div>
                                                    <div className="col-span-7 text-right">{formatNumber(a.gajian_nominal)}</div>
                                                </div>
                                            );
                                        })}
                                    <h3 className="mt-5 text-right text-lg font-bold">TOTAL : Rp {formatNumber(total)}</h3>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default TableLaporan;
