from datetime import date as dt
import numpy_financial as npf
class FinancialLibraryError(Exception):
    pass

def validate_cashflows(cashflows):
    if len(cashflows) < 2:
        raise FinancialLibraryError("At least two cashflows are required.")
    if 0 in cashflows:
        raise FinancialLibraryError("Cashflows cannot be zero.")
    if sum(cashflows) != 0:
        raise FinancialLibraryError("The sum of cashflows must be zero.")

def irr(cashflows):
    try:
        validate_cashflows(cashflows)
        guess = 0.1
        while True:
            r = guess
            d = 1
            for i, c in enumerate(cashflows):
                d += c / ((1 + r) ** i)
            if abs(d) < 1e-5:
                return r
            d1 = 0
            for i, c in enumerate(cashflows):
                d1 -= i * c / ((1 + r) ** (i + 1))
            guess = r - d / d1
    except FinancialLibraryError as e:
        print(f"Error calculating IRR: {str(e)}")

def xirr(cashflows, dates):
    try:
        validate_cashflows(cashflows)
        guess = 0.1
        while True:
            r = guess
            d = 1
            for i in range(len(cashflows)):
                d += cashflows[i] / ((1 + r) ** ((dates[i] - dates[0]).days / 365))
            if abs(d) < 1e-5:
                return r
            d1 = 0
            for i in range(len(cashflows)):
                d1 -= (dates[i] - dates[0]).days / 365 * cashflows[i] / \
                ((1 + r) ** ((dates[i] - dates[0]).days / 365 + 1))
            guess = r - d / d1
    except FinancialLibraryError as e:
        print(f"Error calculating XIRR: {str(e)}")
    except Exception as e:
        print(f"Error calculating XIRR: {str(e)}")


def pv(rate, nper, pmt, fv=0):
    try:
        pv = 0
        for i in range(nper):
            pv += pmt / ((1 + rate) ** i)
        pv += fv / ((1 + rate) ** nper)
        return pv
    except ZeroDivisionError as e:
        print("Error calculating PV: Divide by zero error")
    except Exception as e:
        print(f"Error calculating PV: {str(e)}")

def npv(rate, cashflows):
    try:
        npv = 0
        for i, c in enumerate(cashflows):
            npv += c / ((1 + rate) ** i)
        return npv
    except ZeroDivisionError as e:
        print("Error calculating NPV: Divide by zero error")
    except Exception as e:
        print(f"Error calculating NPV: {str(e)}")

def fv(rate, nper, pmt, pv=0):
    try:
        fv = 0
        for i in range(nper):
            fv += pmt * ((1 + rate) ** (nper - i - 1))
        fv += pv * (1 + rate) ** nper
        return fv
    except ZeroDivisionError as e:
        print("Error calculating FV: Divide by zero error")
    except Exception as e:
        print(f"Error calculating FV: {str(e)}")

def emi(rate,nper,pv):
    try:
        emi = pv*rate*((1+rate)**nper)/(((1+rate)**nper)-1)
        return emi
    except ZeroDivisionError as e:
        print("Error calculating emi: Divide by zero error")
    except Exception as e:
        print(f"Error calculating emi: {str(e)}")

def rate(t,pmt,pv1,fv1):
    try:
        return npf.rate(t, pmt, -pv1, fv1)
    except ZeroDivisionError as e:
        print("Error calculating ROI: Divide by zero error")
    except Exception as e:
        print(f"Error calculating ROI: {str(e)}")

cashflows = [-1000, 300, -400, 500, 600]
dates = [dt(2022,1,1), dt(2022,4,1), dt(2022,7,1), dt(2022,10,1), dt(2023,1,1)]
rate1 = 0.5
nper = 6
pmt = 1500

print()
irr1 = irr(cashflows)
print(f"Internal rate of return : {irr1}")
print()
xirr1 = xirr(cashflows,dates)
print(f"Extended internal rate of return : {xirr1}")
print()
pv1 = pv(rate1,nper,pmt,0)
print(f"Present Value : {pv1}")
print()
npv1 = npv(rate1,cashflows)
print(f"Net Present Value : {npv1}")
print()
fv1 = fv(rate1,nper,pmt,0)
print(f"Future Value : {fv1}")
print()
emi1 = emi(rate1,nper,pv1)
print(f"EMI : {emi1}")
print()
rate1 = rate(nper,pmt,pv1,fv1)
print(f"Interest Rate : {rate1}")