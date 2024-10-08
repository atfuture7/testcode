#test panda

import numpy as np
import pandas as pd

# pandas Series
s = pd.Series([1, 3, 5, np.nan, 6, 8])

print(s)

# pandas DataFrame

dates = pd.date_range('20200229', periods=6)

print(dates)

df = pd.DataFrame( np.random.randn(6, 4), \
                  index=dates, \
                      columns=list('ABCD'))

print(df)

# pass in dict, must be in same length

df2 = pd.DataFrame({'A': 1., \
                    'B': pd.Timestamp('20200214'), \
                    'C': pd.Series(1, index=list(range(4)), dtype='float32'), \
                    'D': np.array([3]*4, dtype='int32'), \
                    'E': pd.Categorical(['test', 'train', 'test', 'train']), \
                    'F': 'foo'})

print (df2)
print(df2.dtypes)

# viewing data
print( df.head())
print( df.tail(3))
print( df.index )
print( df.columns )
print( df.to_numpy())
print(df2.to_numpy())