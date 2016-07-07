import * as pbi from 'powerbi-client';

export default class PowerBiService {
    // static name = "PowerBiService";
    private powerBiCoreService: pbi.service.Service;
    
    static $inject = [
        'PowerBiGlobal'
    ];
    
    constructor(PowerBi: typeof pbi.service.Service) {
        this.powerBiCoreService = new PowerBi(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    }
    
    embed(element: HTMLElement, config: pbi.IEmbedConfiguration): pbi.Embed {
        return this.powerBiCoreService.embed(element, config);
    }

    get(element: HTMLElement): pbi.Embed {
        return this.powerBiCoreService.get(element);
    }

    find(uniqueId: string): pbi.Report | pbi.Tile {
        return this.powerBiCoreService.find(uniqueId);
    }
    
    reset(element: HTMLElement): void {
        this.powerBiCoreService.reset(element);
    }
}