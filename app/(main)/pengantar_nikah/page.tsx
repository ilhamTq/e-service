import { Metadata } from 'next';
import React from 'react';
import TablePengantarNikah from './Table';

export const metadata: Metadata = {
    title: 'Pengantar Nikah',
};

const Skin = () => {
    return (
        <div>
            <TablePengantarNikah />
        </div>
    );
};

export default Skin;
