import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss',
})
export class PayrollComponent implements OnInit {
  ngOnInit(): void {
    console.log('first');
  }
  displayedColumns: string[] = ['salaryStructure', 'amount'];
  deductionColumns: string[] = ['deductions', 'deductionAmount'];

  salaryData = [
    { salary: 'Basic Salary', amount: 445331 },
    { salary: 'Housing Allowance', amount: 222666 },
    { salary: 'Transport Allowance', amount: 89066 },
    { salary: 'Utility Allowance', amount: 44533 },
    { salary: 'Productivity Allowance', amount: 89066 },
    { salary: 'Communication Allowance', amount: 66800 },
    { salary: 'Inconvenience Allowance', amount: 66800 },
    { salary: 'Gross Salary', amount: 1024261 },
  ];

  deductionData = [
    { deductions: 'Tax/PAYE', deductionAmount: 163696 },
    { deductions: 'Employee Pension', deductionAmount: 60565 },
    { deductions: 'Total Deduction', deductionAmount: 224261 },
    { deductions: 'Net Salary', deductionAmount: 800000 },
  ];
}
