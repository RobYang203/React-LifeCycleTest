# React LifeCycle

### 元件
* App
    * 主 Component
    * 設定兩個按鈕
        1. 觸發 `this.setState();`, 執行 **render**
        2. 建立`兩個子Component`,傳送 **props** 
    * 設定是否要關閉`getDerivedStateFromProps`,查看狀態
    * 設定是否要關閉`shouldComponentUpdate`,查看狀態
* AppSub
    * 子Component
    * 設定一個按鈕
        1. 觸發 `this.setState();`, 執行 **render**
    * 兩個計數器
        * 針對 state update
        * 針對 props update
* 每個事件都設有`console.log`
