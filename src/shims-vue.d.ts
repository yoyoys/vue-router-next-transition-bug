declare module '*.vue' {
  import {defineComponent} from 'vue'
  const Vue: ReturnType<typeof defineComponent>;
  export default Vue;
}
