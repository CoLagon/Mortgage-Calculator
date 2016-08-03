
	$(document).ready(function() {

	$("#hi").click(function(){ 
	var loanBalance = $('#balance').val(); //var contents = $('#contents');
	var interestRate = $("#rate").val();
	var loanTerm = $("#term").val();
	var length = $("#period option:selected").val();

	var numberOfPayments = loanTerm * length;
	var monthlyInterestRate = (interestRate / 100)/ length;
	var compoundedInterestRate = Math.pow ((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
	var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;


	
	
	$("#end").html(monthlyPayment);

		});
});







/*// Loan balance is $300,000
var loanBalance = 300000;

// Loan term is 30 years
var loanTerm = 30;

// Period is 12 for monthly, 6 for bi-monthly
var period = 12;

// Annual Interest Rate is 4%
var interestRate = 4;

// number of payments (360)
var numberOfPayments = loanTerm * period;

// monthly interest rate (~0.0033)      
var monthlyInterestRate = (interestRate / 100) / period ;         

// compounded interest rate (~3.31)
var compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  

// interest quotient (~0.004)
var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1);

// final calculation rounded to two decimal places ($1432.25)
var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;*/