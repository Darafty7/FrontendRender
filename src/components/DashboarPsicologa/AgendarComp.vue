<template>
    <div>
        <div
            class=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0 pb-0 mb-0 border-bottom">
            <h1 class="h2"> Abrir Agenda</h1>
            <div class="btn-toolbar mb-2 mb-md-0" id="agenda">
                <div class="btn-group me-2">

                </div>
            </div>
        </div>
        <agenda-l-fpsicom></agenda-l-fpsicom>


    </div>
</template>



<script>
import AgendaLFpsicom from '../DashboardaprendizEnfermera/AgendaLFpsicom.vue'
export default {
    name: 'AgendarComp',
    components: { AgendaLFpsicom }
}
</script>

<style scoped>
@media (max-width: 767.98px) {
    #agenda {
        top: 5rem;
    }
}

.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    height: 7vh;
}
</style>