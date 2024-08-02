"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cbsHeaders = exports.switchHeaders = exports.npciHeaders = void 0;
// Define headers for each type of data
exports.npciHeaders = [
    { id: 'NPCI_TXN_TYPE', title: 'NPCI_TXN_TYPE' },
    { id: 'NPCI_STATUS', title: 'NPCI_STATUS' },
    { id: 'TXNID', title: 'TXNID' },
    { id: 'RRN', title: 'RRN' },
    { id: 'NPCI_CODE', title: 'NPCI_CODE' },
    { id: 'DATE', title: 'DATE' },
    { id: 'TIME', title: 'TIME' },
    { id: 'AMOUNT', title: 'AMOUNT' },
    { id: 'A', title: 'A' },
    { id: 'B', title: 'B' },
    { id: 'C', title: 'C' },
    { id: 'D', title: 'D' },
    { id: 'PSP', title: 'PSP' },
    { id: 'E', title: 'E' },
    { id: 'PAYER_VPA', title: 'PAYER_VPA' },
    { id: 'F', title: 'F' },
    { id: 'PAYEE_VPA', title: 'PAYEE_VPA' },
    { id: 'G', title: 'G' },
    { id: 'H', title: 'H' },
    { id: 'I', title: 'I' },
    { id: 'J', title: 'J' },
    { id: 'K', title: 'K' },
    { id: 'L', title: 'L' },
    { id: 'M', title: 'M' },
    { id: 'N', title: 'N' },
];
exports.switchHeaders = [
    { id: 'DATE', title: 'DATE' },
    { id: 'AMOUNT', title: 'AMOUNT' },
    { id: 'A', title: 'A' },
    { id: 'NPCI_CODE', title: 'NPCI_CODE' },
    { id: 'RRN', title: 'RRN' },
    { id: 'EXNID', title: 'EXNID' },
    { id: 'PAYEE_VPA', title: 'PAYEE_VPA' },
    { id: 'C', title: 'C' },
    { id: 'PAYER_VPA', title: 'PAYER_VPA' },
    { id: 'D', title: 'D' },
    { id: 'TXNID', title: 'TXNID' },
    { id: 'MCC', title: 'MCC' },
];
exports.cbsHeaders = [
    { id: 'A', title: 'A' },
    { id: 'DATE', title: 'DATE' },
    { id: 'AMOUNT', title: 'AMOUNT' },
    { id: 'B', title: 'B' },
    { id: 'C', title: 'C' },
    { id: 'D', title: 'D' },
    { id: 'E', title: 'E' },
    { id: 'F', title: 'F' },
    { id: 'G', title: 'G' },
    { id: 'RRN', title: 'RRN' },
    { id: 'H', title: 'H' },
    { id: 'TXNID', title: 'TXNID' },
];
