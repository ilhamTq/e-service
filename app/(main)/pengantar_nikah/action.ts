'use server';

import prisma from '@/lib/prisma';
// import { Prisma } from '@prisma/client';
// import { decode } from 'next-auth/jwt';
// import { cookies } from 'next/headers';
// import Excel from 'exceljs';
import { isNumber, isObject } from 'lodash';

export const saveGajian = async (formData: FormData) => {
    const data = JSON.parse(String(formData.get('postData')));
    const file1 = formData.get('file') as File;
    const fileList: File[] = [];
    fileList[0] = file1;
    if (!result.success) return { result: { success: false }, error: true };

    const file2 = await file1.arrayBuffer();

    // data.gajian_file = fileList;
    // const wb = new Excel.Workbook();
    // const reader = new FileReader();
    // reader.readAsArrayBuffer(file1);
    // reader.onload = () => {
    // const buffer = reader.result;
    let excelTitles: any[] = [];
    let excelData: any[] = [];
    wb.xlsx.load(Buffer.from(file2)).then(async (workbook) => {
        // console.log(workbook, 'workbook instance');
        // workbook.eachSheet((sheet, id) => {
        workbook.worksheets[0].eachRow((row: any, rowIndex) => {
            if (rowIndex > 0) {
                // get values from row
                let rowValues = row.values;
                // remove first element (extra without reason)
                if (rowIndex === 1) rowValues.shift();
                // titles row
                else if (rowIndex === 2) excelTitles = rowValues;
                // table data
                else {
                    // create object with the titles and the row values (if any)
                    let rowObject: any = {};
                    for (let i = 0; i < excelTitles.length; i++) {
                        let title = excelTitles[i];
                        let value = rowValues[i] ? rowValues[i] : '';
                        rowObject[title] = value;
                    }
                    excelData.push(rowObject);
                }
            }
        });
        

export const download = async () => {};
