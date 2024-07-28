const tabHandler = {
    Tab: 'Home',
    SetTab: function (tab) {
        this.Tab = tab
        this.Temp
    },
    Show: () => console.log(tabHandler.Tab),
    Temp:function (state){
        state(this.Tab)
        console.log('Tab Set')
    }
}
module.exports = tabHandler;