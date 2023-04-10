// Don't remove this file, because it registers the demo components.
import lclButton from '../../../packages/button/index.vue'
import lclInput from '../../../packages/input/index.vue'
import messageDemo from '../../../packages/message/demo/demo.vue'



import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents (app) {
    app.component('lclButton', lclButton)
    app.component('lclInput', lclInput)
    app.component('messageDemo', messageDemo)

    //上边是自己的
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
}