<template>
    <div>
    <div class=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0 pb-0 mb-0 border-bottom p-0">
        <h1 class="h2">Agenda tu cita</h1>
        <div class="btn-toolbar mb-2 mb-md-0" id="agenda">
            <div class="btn-group me-2">
               
            </div>

        </div>
    </div>
    <agenda-l-fcom></agenda-l-fcom>
</div>
</template>


<script>
import AgendaLFcom from '../DashboardaprendizEnfermera/AgendaLFcom.vue';
export default {
    name: 'CitasAprendizComp',
    components:{
        AgendaLFcom
    }
}
</script>



<style scoped>

</style>