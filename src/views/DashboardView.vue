<template>
    <div>
        <nav-comp></nav-comp>
        <div class="contenedorprincipal col-12 col-md-12">


            <header class="navbar navbar-dark   flex-md-nowrap p-0 shadow" id="headerp">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3">Psicología</a>
                <button class="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <input class="form-control form-control-dark w-100" type="text" placeholder="Buscar" aria-label="Buscar">

                <div class="navbar-nav">


                </div>
            </header>


            <!--MENU PARA QUE LA PSICOLOGA PROGRAME CITAS, MIRE EL LISTADO DE CITAS ATENDIDAS, Y GENERE REPORTE DE LOS APRENDICES-->
            <div class="container-fluid p-2" id="colorfond">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block d-md-block  collapse">
                        <!--SE QUITO EL SEDEBAR -->
                        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item ">
                                    <router-link class="nav-link" aria-current="page" to="/">
                                        <div class="d-flex align-items-center">
                                            <span class="material-icons-outlined me-3">
                                                home
                                            </span>
                                            Inicio
                                        </div>
                                    </router-link>

                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link " aria-current="page" to="/agendapsi">
                                        <div class="d-flex align-items-center">
                                            <span class="material-icons-outlined me-3">
                                                calendar_month
                                            </span>
                                            Apertura agenda
                                        </div>

                                    </router-link>

                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link " to="citas">
                                        <div class="d-flex align-items-center">
                                            <span class="material-icons-outlined me-3">
                                                view_list
                                            </span>
                                            Citas
                                        </div>

                                    </router-link>

                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="reporte">
                                        <div class="d-flex align-items-center">
                                            <span class="material-icons-outlined me-3">
                                                summarize
                                            </span>
                                            Reporte
                                        </div>

                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <!--Calendario que la psicologa dispone para atender citas-->

                    <main class="calendar col-md-9 ms-sm-auto col-lg-10 px-md-4">

                        <router-view />


                    </main>

                </div>

            </div>
        </div>

        <footer-comp></footer-comp>
    </div>
</template>


<script>
import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue'


export default {
    name: 'DashboardView',
    components: {
        NavComp,
        FooterComp

    }
}
</script>

<style scoped>
.calendar {
    /*   width: 400px; Ajusta el ancho según tus necesidades */
    height: 50vh;
    /*  display: flex; */
    justify-content: center;
    align-items: center;
    background-image: url("../assets/images/Logo1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

}


.calendar::before {
    content: "'El mejor psicólogo es el que inspira más esperanza'. Psicologo(a) en esta sección podrás habilitar tu agenda para los acompañamientos psicológicos.";
}

.material-icons-outlined {
    color: black;


}

.nav-item {
    color: rgb(12, 225, 58), 0, 0;
}

.calendar {
    height: 90vh;
}

/*estilos*/


.feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    /* Behind the navbar */
    padding: 48px 0 0;
    /* Height of navbar */
    box-shadow: inset 1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
    .sidebar {
        top: 5rem;
    }
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
    font-weight: 500;
    color: #333;
}

.sidebar .nav-link .feather {
    margin-left: 4px;
    color: #727272;
}

.sidebar .nav-link.active {
    color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
    color: inherit;
}

.sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset 1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
    top: .25rem;
    left: 1rem;
}

.navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
}

.form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}




/*
 * Navbar
 */


.navbar-toggler-icon {
    display: inline-block;

    width: 1.5em;
    height: 1.5em;
    vertical-align: right;
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100%;
}



/*estios dados para los colores*/
#headerp {
    background-color: #31ada1;
}

#sidebarMenu {
    background-color: #d1e6dc;
}

#colorfond {
    background-color: #f0f8ff;
}
</style>