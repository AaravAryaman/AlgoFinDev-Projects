# AlgoFinDev-Projects (in chronological order)

1. Assignment-1 [https://github.com/AaravAryaman/220012-Aarav-Aryaman-1](https://github.com/AaravAryaman/220012-Aarav-Aryaman-1.git)  
The objective of this assignment was to calculate the Moving Averages for a particular stock.  
I have first installed all prerequisite dependencies and basically used pandas, matplotlib and yfinance for this assignment. Stock I have chosen is INFOSYS. I have taken the period of three months equal to 66 days as those are the number of weekdays during any such period (on an average count). Finding SMA and EMA was new to me and took me much time to research on how to do it as I was faced with quite a few errors due to my incorrect approach at first.  

2. Portfolio Website [https://github.com/AaravAryaman/220012-Aarav-Aryaman-WebDev](https://github.com/AaravAryaman/220012-Aarav-Aryaman-WebDev.git)  
Made a simple portfolio local website with an introduction, about myself, projects and contact pages using html.
  
![image](https://github.com/AaravAryaman/220012-Aarav-Aryaman-WebDev/assets/131551391/ef3dfd13-f3c1-4fcb-a02b-39ea10a2884f)  
![image](https://github.com/AaravAryaman/220012-Aarav-Aryaman-WebDev/assets/131551391/cb3bad49-6754-4cd0-b71c-95b5053b9ce5)  
![image](https://github.com/AaravAryaman/220012-Aarav-Aryaman-WebDev/assets/131551391/4878cbd3-7270-49b9-98b4-98a1057c154f)  
![image](https://github.com/AaravAryaman/220012-Aarav-Aryaman-WebDev/assets/131551391/7a46f87f-4635-41dd-bd35-6ee1b5c0f1a1)  

4. Assignment-2 [https://github.com/AaravAryaman/220012-Aarav-Aryaman-1](https://github.com/AaravAryaman/220012-Aarav-Aryaman-1.git)  
Team Members- Aarav Aryaman 220012 & Jiyanshu Dhaka 220481  
The objective of this assignment was to develop a trading strategy using Kernel Channel and Stochastic Oscillator for both small cap (J K Lakshmi Cement) and large cap (Infosys) stocks.  
I, Aarav took up the major coding part and assigned Jiyanshu the major report/analysis part by mutual agreement to manage time. We were both active in the other aspect as well, Jiyanshu suggesting improvements in the code implementations and me, suggesting changes in the report to make it more well-versed and informative. Both of us making corrections for the other wherever necessary. We applied formulae, plotted signals, calculated metrics (backtested using historical data), and analysed the overall and individual trading strategies.  

5. Calculator App [https://github.com/AaravAryaman/220012-Aarav-Aryaman-Calculator](https://github.com/AaravAryaman/220012-Aarav-Aryaman-Calculator.git)  
Made a working interactive and functional model for a Virtual Calculator App using react.js.
  
![image](https://github.com/AaravAryaman/220012-Aarav-Aryaman-Calculator/assets/131551391/32000072-ca74-4462-88b5-c526ccd33d74)  

https://github.com/AaravAryaman/220012-Aarav-Aryaman-Calculator/assets/131551391/94cf46e0-c141-47d6-aeca-0622fccce55e  

6. Assignment-3 [https://github.com/AaravAryaman/220012-Aarav-Aryaman-1](https://github.com/AaravAryaman/220012-Aarav-Aryaman-1.git)  
The objective of this assignment was to develop a Pair Trading Strategy.  
I began with the excel part, completing the correlation analysis first and choosing appropiate stocks to chose for pair trading based on their correlation coefficient calculated on basis of their daily returns - Hindalco and Tata Steel. Then, i proceeded with writing the code for calculating the spread, differentials, price ratio, correlation coefficient and z-score of the chsoen stocks. A strategy was developed and thereby implemented on the stocks, to generate buy/sell signals by defining parameters such as lookback period, entry threshold and exit threshold. I finally checked the performance of the developed strategy by finding the portfolio value and cumulative value at various stages of the strategy. The sharpe ratio and maximum drawdown are also calculated. Finally for the sensitivity analysis part, taking a range of values for all the parameters taken, all the metrics are calculated to find the optimal combination and the result is analysed.  

7. Website Changes [https://github.com/AaravAryaman/fac-app](https://github.com/AaravAryaman/fac-app.git)  
The last task was to make some changes in the wesbite as provided in [https://github.com/bangaradi/fac-app](https://github.com/bangaradi/fac-app.git).
  
![image](https://github.com/AaravAryaman/AlgoFinDev-Projects/assets/131551391/01ff11ae-073f-4955-ac39-9e65a5272ab7)
![image](https://github.com/AaravAryaman/AlgoFinDev-Projects/assets/131551391/c557f186-81bc-4fdd-80ec-2a76204db8cf)
  
The task was to remove the blue sidebar, to remove every feature in the topbar except logout and keep only one element in the dashboard header with value 0. After applying the changes, the results were committed to [https://github.com/AaravAryaman/fac-app](https://github.com/AaravAryaman/fac-app.git).  
  
![image](https://github.com/AaravAryaman/AlgoFinDev-Projects/assets/131551391/2193807b-f514-4e37-9109-3d0d4f00c2fc)
  
I successfully removed the blue sidebar and edited the topbar and dashboard header by editing the dashboard file. But intead of 0, the final value being shown in the dashboard header was 'NaN'. To solve this, I tried using this.setState and declaring a new function altogether, apart from searching for various ways to use useEffect and const to solve it. However, I could not find a solution to this.
