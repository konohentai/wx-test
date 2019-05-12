<template>
<footer>
    <div>
        <navigator
            url="/pages/index/main"
            hover-class="other-navigator-hover"
        >
            菊部
        </navigator>
    </div>
    <div>
        <navigator
            url="/pages/mine/main"
            hover-class="other-navigator-hover"
        >
            菊右惊
        </navigator>
    </div>
</footer>
    
</template>
<style scoped>
    footer{
        display: flex;
        background-color: #58bc58;
        color: #fff;
        /* text-align: center; */
        height: 60px;
        line-height: 60px;
        flex-direction: row;
        justify-content: space-around;
        /* flex: 1 */
         /* align-items: flex-end; */
        /* height: 100%; */
        /* width: 100%; */
    }
    div{
        /* display: flex; */
        text-align: center;
        flex: 1;
        height: 100%;
    }
</style>