'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">task-manager documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' : 'data-bs-target="#xs-components-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' :
                                            'id="xs-components-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' }>
                                            <li class="link">
                                                <a href="components/MainTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' : 'data-bs-target="#xs-directives-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' :
                                        'id="xs-directives-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' }>
                                        <li class="link">
                                            <a href="directives/TaskStatusColorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskStatusColorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' : 'data-bs-target="#xs-pipes-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' :
                                            'id="xs-pipes-links-module-TasksModule-24a9de656c550b019b4a0f6e00bfca4d63204f4b772d58ff474f0ada038838a5799b05b0b8779f3ff11e1df6da7afc71a35b8f480bd22b7e64c4a6214a06d9b1"' }>
                                            <li class="link">
                                                <a href="pipes/DateFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateFormatPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksRoutingModule.html" data-type="entity-link" >TasksRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskList.html" data-type="entity-link" >TaskList</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CRUDTaskListService.html" data-type="entity-link" >CRUDTaskListService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IByStatutTaskListService.html" data-type="entity-link" >IByStatutTaskListService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICRUDTaskListService.html" data-type="entity-link" >ICRUDTaskListService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});