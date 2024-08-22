import { Metadata } from 'next';
import React from 'react';
import TableLaporan from './Table';

export const metadata: Metadata = {
    title: 'Laporan Gajian Bulanan',
};

interface LaporanParams {
    params: {
        id: any;
    };
}

const Skin = ({ params }: LaporanParams) => {
    return (
        <div>
            <TableLaporan params={params} />
        </div>
    );
};

export default Skin;
