# IRR

import numpy_financial as npf
import pandas as pd
from ctypes import LibraryLoader
from fin-LibraryLoader import rate
import numpy as np

cash_flows = [-1000, 300, 400, 500, 600]

irr = np.irr(cash_flows)

print(f"The internal rate of return is: {irr}")


# EIRR


dates = ['2022-01-01', '2022-04-01', '2022-07-01', '2022-10-01', '2023-01-01']

cash_flows = [-1000, 300, 400, 500, 600]

df = pd.DataFrame({'date': dates, 'cash_flow': cash_flows})

df['date'] = pd.to_datetime(df['date'])

xirr = pd.Series(df['cash_flow'].values, index=df['date']).xirr()

print(f"The extended internal rate of return is: {xirr}")


# PV


cash_flows = [-1000, 300, 400, 500, 600]

interest_rate = 0.05

pv = np.pv(interest_rate, range(1, len(cash_flows) + 1), 0, cash_flows)

print(f"The present value is: {pv}")


# NPV


cash_flows = [-1000, 300, 400, 500, 600]

interest_rate = 0.05

npv = np.npv(interest_rate, cash_flows)

print(f"The net present value is: {npv}")


# FV


cash_flows = [-1000, 300, 400, 500, 600]

interest_rate = 0.05

num_periods = 5

fv = np.fv(interest_rate, num_periods, 0, cash_flows)

print(f"The future value is: {fv}")


# EMI,Interest rate


# Set up the variables

loan_amount = 100000

interest_rate = 0.05 / 12

num_periods = 12 * 5

monthly_payment = -npf.pmt(interest_rate, num_periods, loan_amount)

# Calculate the total payments and interest paid

total_payments = monthly_payment * num_periods

interest_paid = total_payments - loan_amount

# Calculate the return on investment

roi = npf.rate(num_periods, monthly_payment, -loan_amount, 0)

print("Monthly payment:", monthly_payment)

print("Total payments:", total_payments)

print("Interest paid:", interest_paid)

print("ROI:", roi)