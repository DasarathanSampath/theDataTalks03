---
date: 19 Apr 2020
desc: Introduction to mean, variance, standard deviation and standard error of a population
imgDesc: 'Image'
name: 'standard-deviation-and-error'
noMainImage: True
title: "Standard deviation and Standard error"
altLang: false
---

Let,

x1, x2, x3, x4, .... xn are observations of a population and 'n' being the total number of observations, then   

**Population mean**

\begin{equation}
x' = \mu = {{x_{1}+x_{2}+x_{3}+.....+x_{n}} \over n}
\end{equation}

Which is represented as

\begin{equation}
\mu = {{\sum_{i=1}^{n} x_{n}} \over n}
\end{equation}

**Population vairance**

\begin{equation}
\nu = {{ (x_{1}-\mu) + (x_{2}-\mu) + (x_{3}-\mu) +....+ (x_{n}-\mu)} \over n} 
\end{equation}

Which is represented as

\begin{equation}
\nu = {\sum_{i=1}^{n} (x_{i} -\mu) \over n}^2 =  \sigma^2 
\end{equation}

**Population standard deviation**  

\begin{equation}
\sigma = \sqrt{\nu} = \sqrt{\sigma^2}
\end{equation}

Suppose n number of samples were taken from the above population &  x_1, x_2, x_3, ... x_n represents each sample then, 

\begin{equation}
\text{   Mean of each samples:   } x_1', x_2', x_3', ... x_n'
\end{equation}

\begin{equation}
\text{   Mean of Sample means:   } \mu' = {{\sum_{i=1}^n x_i'} \over n}
\end{equation}    

\begin{equation}
\text{   Variance of sample means:   } \nu' = \sigma'^2 = {{\sum_{i=1}^n (x_i'-\mu')^2} \over (n-1)}
\end{equation}    

- Note we have used (n-1) as denominator for sample variance. We will talk about this in later sections.

**Standard deviation of sample means = Standard deviation of Statistics = Standard Error(SE) =** 

\begin{equation}
\sigma' = \sqrt{\nu'} = \sqrt{(\sigma')^2}
\end{equation}

**Mean**  
Average of a population.

**Variance**  
The deviation for set of numbers which are spread out from the population mean. It is the expected squared deviation of a random variable from the population mean.

**Standard Deviation**   
Amount of variability/spread for a population. Higher standard deviation for a population having higher spread.

**Standard Error**  
The deviation between the sample mean and the population mean is called Standard error. Describes how far the sample mean is from the true population mean.


**When we do not know the properties(mean, variance, etc.,) of true population,** we can estimate them using sample sets.

As described above the Mean of all sample is taken as unbiased population mean estimator. And this is the best we can estimate. 
Since the variance is dependent on mean, 

\begin{equation}
\text{Variance of samples = True Varience = } \sigma^2 \\\\
\end{equation}

Let X_1, X_2, X_3, ....... X_n are independent samples from a population, whos expected value is µ and variance σ². Then  

\begin{equation}
\text{Sample mean } \overline{X} = {X_1 + X_2 + X_3 .... X_n \over n} \\\\
\text{Variance of all samples } = var(\overline{X})   \\\\
= var \left( X_1 + X_2 + X_3 .... X_n \over n \right)  \\\\
= {1 \over n^2} var(X_1 + X_2 + X_3 .... X_n)   \\\\
= {1 \over n^2} (var(X_1) + var(X_2) + var(X_3) .... var(X_n))  \\\\
= {1 \over n^2} (n \sigma^2)  \\\\
= {\sigma^2 \over n}  \\\\
\end{equation}

Standard deviation of Statistics = Standard Error(SE)

\begin{equation}
SE = \sqrt{(\sigma)^2 \over n} = {\sigma \over \sqrt{n}}
\end{equation}

<style>

</style>