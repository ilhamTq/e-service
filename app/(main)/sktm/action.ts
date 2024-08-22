'use server';

import prisma from '@/lib/prisma';
import { SumberDanaSchema } from '@/src/schema/sumberdana';
import Sumberdana_Type from '@/src/types/sumberdana';
import { Prisma } from '@prisma/client';
import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export const saveSumberDana = async (data: Sumberdana_Type) => {
    const result = SumberDanaSchema.safeParse(data);
    // console.log(data);
    if (result.success) {
        const sessionToken = cookies().get('next-auth.session-token')?.value ?? cookies().get('__Secure-next-auth.session-token')?.value;

        const decoded = await decode({
            token: sessionToken,
            secret: String(process.env.NEXTAUTH_SECRET),
        });
        try {
            if (data.sd_id)
                await prisma.sumberdana.update({
                    data: {
                        sd_nama: data.sd_nama,
                        sd_tahun: data.sd_tahun,
                        sd_kode_rekening: data.sd_kode_rekening,
                        sd_kegiatan: data.sd_kegiatan,
                        sd_jumlah: data.sd_jumlah,
                        sd_pptk: data.sd_pptk,
                        sd_pa: data.sd_pa,
                        sd_bendahara: data.sd_bendahara,
                    },
                    where: {
                        sd_id: data.sd_id,
                    },
                });
            else
                await prisma.sumberdana.create({
                    data: {
                        sd_opd: Number(decoded?.opd),
                        sd_nama: data.sd_nama,
                        sd_tahun: data.sd_tahun,
                        sd_kode_rekening: data.sd_kode_rekening,
                        sd_kegiatan: data.sd_kegiatan,
                        sd_jumlah: data.sd_jumlah,
                        sd_pptk: data.sd_pptk,
                        sd_pa: data.sd_pa,
                        sd_bendahara: data.sd_bendahara,
                        sd_active: true,
                        sd_app: 'gaji',
                    },
                });
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                return { success: false, error: e.message };
            }
            throw e;
        }
        return { success: true, data: result };
    } else {
        return { success: false, error: result.error.format() };
    }
};

export const deleteSumberDana = async (sd_id: number) => {
    return await prisma.sumberdana.update({
        data: { sd_deleted: new Date() },
        where: {
            sd_id: sd_id,
        },
    });
};
