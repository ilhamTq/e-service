"use client";
import IconDownload from "@/components/icon/icon-download";
import IconPlus from "@/components/icon/icon-plus";
import IconTrashLines from "@/components/icon/icon-trash-lines";
import IconX from "@/components/icon/icon-x";
import bulan from "@/lib/bulan";
// import { GajianBulananSchema } from '@/src/schema/gajian_bulanan';
// import { IRootState } from '@/store';
import { Dialog, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { DataTable } from "mantine-datatable";
import { Fragment, useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
// import { useSelector } from 'react-redux';
import Swal, { SweetAlertIcon } from "sweetalert2";
import { z } from "zod";
// import { deleteGajian, saveGajian } from "./action";
import { formatNumber } from "@/lib/format_number";
import Link from "next/link";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

// type Inputs = z.infer<typeof GajianBulananSchema>;

const TablePengantarNikah = () => {
  // const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
  const tahun_now = new Date().getFullYear();
  const tahun_list = Array.from(
    { length: 10 },
    (value, index) => tahun_now - index
  );
  const [show, setShow] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [showDownload2, setShowDownload2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tahun, setTahun] = useState(new Date().getFullYear());
  const [data, setData] = useState<{ ttd_bulan: string; nominal: number }[]>();
  const [fetching, setFetching] = useState(true);
  // const [jabatan, setJabatan] = useState<Jabatan_Type[]>();
  const [pilihan, setPilihan] = useState<number>();

  const {
    register,
    handleSubmit,
    setValue,
    // watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    // defaultValues: { jabatan_nama: edit?.jabatan_nama, jabatan_kop_surat: edit?.jabatan_kop_surat, jabatan_kelas_biaya: edit?.jabatan_kelas_biaya, jabatan_kwitansi: edit?.jabatan_kwitansi },
    // resolver: zodResolver(GajianBulananSchema),
  });

  const getData = async (tahun: number) => {
    setFetching(true);
    const res = await fetch(`/api/pengantarNikah/`);
    const result = await res.json();
    setData(result.data);
    setFetching(false);
  };


  const showUpload = async () => {
    setLoading(true);
    // if (!sumberdana) await getSumberdana();
    reset({});
    setShow(true);
    setLoading(false);
  };

  const onFormError: SubmitErrorHandler<any> = (e) => {
    console.log(e);
    setLoading(false);
  };

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const formData = new FormData();
    const postData = JSON.stringify(data);
    formData.append("postData", postData);
    formData.append("file", data.gajian_file[0]);
    // const result = await saveGajian(formData);
    // console.log(result);
    // if (!result) {
    //   console.log("Something went wrong");
    //   return;
    // }

    // if (result.error) {
    //   setShow(false);
    //   showAlert("error", "Data gagal simpan");
    //   setLoading(false);
    //   return;
    // }

    await getData(tahun);
    setLoading(false);
    reset({});
    setShow(false);
    showAlert();
    // getJabatan();
  };

  const delPengantar = async (bln: number) => {
    // const res = await deleteGajian(bln, tahun);
    getData(tahun);
    showAlert("success", "Data berhasil dihapus");
  };

  const showAlert = async (
    jenis: SweetAlertIcon = "success",
    pesan = "Data berhasil disimpan"
  ) => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: jenis,
      title: pesan,
      padding: "10px 20px",
    });
  };

  // const getJabatan = async () => {
  //     const res = await fetch('/api/jabatan');
  //     const result = await res.json();
  //     setJabatan(result.data);
  // };

  const showdownloadFile = async () => {
    // if (!jabatan) await getJabatan();
    setShowDownload(true);
  };

  const showdownloadLaporan = async (bln: number, thn: number) => {
    if (!sumberdana) await getSumberdana();
    setSelected({ bulan: bln, tahun: thn });
    // if (!jabatan) await getJabatan();
    setShowDownload2(true);
  };

  const downloadFile = async () => {
    setLoading(true);
    fetch(`/api/download?id=${pilihan}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "template_gaji.xlsx";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setShowDownload(false);
        setLoading(false);
      });
    // const result = await res.json();
    // console.log(result);
  };


  // const updatePilihan = (pil: string) => {
  //     const idx = pilihan.indexOf(Number(pil));
  //     if (idx !== -1) {
  //         // console.log(pilihan.splice(idx, 1));
  //         setPilihan(pilihan.filter((a) => a !== Number(pil)));
  //     } else setPilihan([...pilihan, Number(pil)]);
  // };

  useEffect(() => {
    getData(tahun);
  }, [tahun]);

  //Skin: Hover
  // const [page1, setPage1] = useState(1);
  // const [initialRecords1, setInitialRecords1] = useState(rowData);
  // const [recordsData1, setRecordsData1] = useState(initialRecords1);

  return (
    <div className="panel">
      <div className="mb-5 flex items-center justify-between">
        <h5 className="text-lg font-semibold dark:text-white-light">
          Pengantar Nikah
        </h5>
        <div className="flex items-center gap-5 ltr:ml-auto rtl:mr-auto">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => showUpload()}
            >
              <IconPlus className="ltr:mr-2 rtl:ml-2" />
              {loading ? "Loading..." : "Add"}
            </button>
            {/* <a href="/api/download" className="btn btn-dark">
                            <IconDownload className="ltr:mr-2 rtl:ml-2" />
                            {loading ? 'Loading...' : 'Download Template'}
                        </a> */}
            {/* <span
              className="btn btn-dark cursor-pointer"
              onClick={() => showdownloadFile()}
            >
              <IconDownload className="ltr:mr-2 rtl:ml-2" />
              {loading ? "Loading..." : "Download Template"}
            </span> */}
            <select
              className="form-select lg:w-[100px]"
              defaultValue={tahun}
              onChange={async (e) => {
                setTahun(+e.target.value);
                await getData(tahun);
              }}
            >
              {tahun_list.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
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
            {
              accessor: "sktm_id",
              title: "ID",
              render: ({ ttd_bulan }, recordIndex) => recordIndex + 1,
            },
            {
              accessor: "sktm_user_nama",
              title: "Bulan",
              render: ({ ttd_bulan }) => (
                <Link href={`/laporan/${ttd_bulan}/${tahun}`}>
                  {bulan.find((a) => a.id === Number(ttd_bulan))?.label}
                </Link>
              ),
            },
            {
              accessor: "nominal",
              title: "Yang mengajukan",
              textAlignment: "right",
              render: ({ nominal }) => formatNumber(nominal),
            },
            {
              accessor: "action",
              title: "Action",
              width: "200px",
              render: ({ ttd_bulan }) => (
                <div className="mx-auto flex w-max items-center gap-2">
                  {/* <span onClick={() => tandaTerima({ bln: Number(ttd_bulan), tahun: tahun })} className="cursor-pointer">
                                        <IconDownload />
                                    </span> */}
                  <span
                    onClick={() => showdownloadLaporan(+ttd_bulan, tahun)}
                    className="cursor-pointer"
                  >
                    <IconDownload />
                  </span>
                  <span
                    onClick={() => delSktm(+ttd_bulan)}
                    className="cursor-pointer"
                  >
                    <IconTrashLines className="text-danger" />
                  </span>
                </div>
              ),
            },
          ]}
          idAccessor="ttd_bulan"
          fetching={fetching}
          // totalRecords={initialRecords1.length}
          // recordsPerPage={100}
          // page={page1}
          // onPageChange={(p) => setPage1(p)}
          // recordsPerPageOptions={PAGE_SIZES}
          // onRecordsPerPageChange={setPageSize1}
          minHeight={200}
          // customRowAttributes={({ ttd_bulan }, recordIndex) => ({
          //     nomor: recordIndex,
          // })}
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
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div
            id="fadein_right_modal"
            className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60"
          >
            <div className="flex min-h-screen items-start justify-center px-4">
              <Dialog.Panel
                className={`panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-5 text-black dark:text-white-dark `}
              >
                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                  <h5 className="text-lg font-bold">Upload Gaji</h5>
                  <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="text-white-dark hover:text-dark"
                  >
                    <IconX />
                  </button>
                </div>
                <div className="p-5">
                  <form onSubmit={handleSubmit(processForm, onFormError)}>
                    <div
                      className={clsx("relative mb-4", {
                        "has-error": errors.gajian_bulan,
                      })}
                    >
                      <select
                        {...register("gajian_bulan")}
                        className="form-select"
                      >
                        <option value="">Pilih Bulan</option>
                        {bulan.map((i) => (
                          <option key={i.id} value={i.id}>
                            {i.label}
                          </option>
                        ))}
                      </select>
                      {errors.gajian_bulan ? (
                        <div className="mt-1 text-danger">
                          {errors.gajian_bulan.message}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={clsx("relative mb-4", {
                        "has-error": errors.gajian_tahun,
                      })}
                    >
                      <select
                        {...register("gajian_tahun")}
                        className="form-select"
                      >
                        <option value="">Pilih Tahun</option>
                        {tahun_list.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                      {errors.gajian_tahun ? (
                        <div className="mt-1 text-danger">
                          {errors.gajian_tahun.message}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {sumberdana && (
                      <div
                        className={clsx("relative mb-4", {
                          "has-error": errors.gajian_sumberdana,
                        })}
                      >
                        <select
                          {...register("gajian_sumberdana")}
                          className="form-select"
                        >
                          <option value="">Pilih Sumberdana </option>
                          {sumberdana.map((i) => (
                            <option key={i.sd_id} value={i.sd_id}>
                              {i.sd_nama}
                            </option>
                          ))}
                        </select>
                        {errors.gajian_sumberdana ? (
                          <div className="mt-1 text-danger">
                            {errors.gajian_sumberdana.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    <div
                      className={clsx("mt-4 flex items-center", {
                        "has-error": errors.gajian_file,
                      })}
                    >
                      <input
                        {...register("gajian_file")}
                        id="ctnFile"
                        type="file"
                        className="form-input flex-1 p-0 file:border-0 file:bg-primary/90 file:px-4 file:py-2 file:font-semibold file:text-white file:hover:bg-primary ltr:file:mr-5"
                      />
                    </div>
                    <div
                      className={clsx("mt-4 flex items-center", {
                        "has-error": errors.gajian_created,
                      })}
                    >
                      <Flatpickr
                        placeholder="Pilih Tanggal Gajian"
                        options={{ dateFormat: "Y-m-d", position: "auto left" }}
                        className="form-input flex-1"
                        onChange={(date) => {
                          setValue("gajian_created", date[0]);
                        }}
                      />
                    </div>

                    <div className="mt-8 flex items-center justify-end">
                      <button
                        onClick={() => setShow(false)}
                        type="button"
                        className="btn btn-outline-danger"
                      >
                        Discard
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary ltr:ml-4 rtl:mr-4"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={showDownload} as={Fragment}>
        <Dialog
          as="div"
          open={showDownload}
          onClose={() => {
            setShowDownload(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div
            id="fadein_right_modal"
            className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60"
          >
            <div className="flex min-h-screen items-start justify-center px-4">
              <Dialog.Panel
                className={`panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-5 text-black dark:text-white-dark `}
              >
                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                  <h5 className="text-lg font-bold">Download Template</h5>
                  <button
                    onClick={() => setShowDownload(false)}
                    type="button"
                    className="text-white-dark hover:text-dark"
                  >
                    <IconX />
                  </button>
                </div>
                <div className="p-5">
                  <form>
                    <div className="mb-3 flex flex-col flex-wrap lg:flex-row">
                      <select
                        className="form-select"
                        onChange={(e) => setPilihan(+e.target.value)}
                      >
                        <option value="">Pilih Kelompok</option>
                        <option value={1}>Anggota Dewan</option>
                        <option value={2}>PTT/Honorer</option>
                        <option value={3}>Tenaga Ahli</option>
                      </select>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => downloadFile()}
                        disabled={loading}
                      >
                        <IconDownload className="ltr:mr-2 rtl:ml-2" />
                        {loading ? "Loading..." : "Download"}
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={showDownload2} as={Fragment}>
        <Dialog
          as="div"
          open={showDownload2}
          onClose={() => {
            setShowDownload2(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div
            id="fadein_right_modal"
            className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60"
          >
            <div className="flex min-h-screen items-start justify-center px-4">
              <Dialog.Panel
                className={`panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-5 text-black dark:text-white-dark `}
              >
                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                  <h5 className="text-lg font-bold">Download Laporan Gaji</h5>
                  <button
                    onClick={() => setShowDownload2(false)}
                    type="button"
                    className="text-white-dark hover:text-dark"
                  >
                    <IconX />
                  </button>
                </div>
                <div className="p-5">
                  <form>
                    <div className="mb-3 flex flex-col flex-wrap lg:flex-row">
                      <select
                        onChange={(e) => setPilihan(+e.target.value)}
                        className="form-select"
                      >
                        <option value="">Pilih Kelompok</option>
                        <option value={1}>Anggota Dewan</option>
                        <option value={2}>PTT/Honorer</option>
                        <option value={3}>Tenaga Ahli</option>
                      </select>
                    </div>
                    {sumberdana && (
                      <div
                        className={clsx("relative mb-4", {
                          "has-error": errors.gajian_sumberdana,
                        })}
                      >
                        <select
                          onChange={(e) =>
                            setSelectedSumberDana(+e.target.value)
                          }
                          className="form-select"
                        >
                          <option value="">Pilih Sumberdana </option>
                          {sumberdana.map((i) => (
                            <option key={i.sd_id} value={i.sd_id}>
                              {i.sd_nama}
                            </option>
                          ))}
                        </select>
                        {errors.gajian_sumberdana ? (
                          <div className="mt-1 text-danger">
                            {errors.gajian_sumberdana.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => downloadLaporan()}
                        disabled={loading}
                      >
                        <IconDownload className="ltr:mr-2 rtl:ml-2" />
                        {loading ? "Loading..." : "Download"}
                      </button>
                    </div>
                  </form>
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
