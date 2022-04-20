main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
  if (isEmpty(transactions)) {
    logError('No transactions found');
    return;
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function isEmpty(transactions) {
  return !transactions.length;
}

function logError(message, item = null) {
  if (item) {
    console.error(`${message} ${item}`);
  } else {
    console.error(message);
  }
}

function processTransaction(transaction) {
  if (!isOpen(transaction)) {
    logError(`Transaction ${transaction.id} is not open`);
    return;
  }

  switch (transaction.type) {
    case 'PAYMENT':
      processPayment(transaction);
      break;
    case 'REFUND':
      processRefund(transaction);
      break;
    default:
      logError(`Transaction ${transaction.id} is not a payment or refund`);
      break;
  }
}

function isOpen(transaction) {
  return transaction.status === 'OPEN';
}

function processPayment(transaction) {
  switch (transaction.method) {
    case 'CREDIT_CARD':
      processCreditCardPayment(transaction);
      break;
    case 'PAYPAL':
      processPayPalPayment(transaction);
      break;
    case 'PLAN':
      processPlanPayment(transaction);
      break;
  }
}

function processCreditCardPayment(transaction) {
  console.log(
      'Processing credit card payment for amount: ' + transaction.amount,
  );
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processRefund(transaction) {
  switch (transaction.method) {
    case 'CREDIT_CARD':
      processCreditCardRefund(transaction);
      break;
    case 'PAYPAL':
      processPayPalRefund(transaction);
      break;
    case 'PLAN':
      processPlanRefund(transaction);
      break;
  }
}

function processCreditCardRefund(transaction) {
  console.log(
      'Processing credit card refund for amount: ' + transaction.amount,
  );
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}
