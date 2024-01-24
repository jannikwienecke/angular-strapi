import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAddBannerMitBild extends Schema.Component {
  collectionName: 'components_components_add_banner_mit_bilds';
  info: {
    displayName: 'Add Banner mit Bild';
  };
  attributes: {
    Titel: Attribute.String;
    HintergrundBild: Attribute.Media;
    seite: Attribute.Relation<
      'components.add-banner-mit-bild',
      'oneToOne',
      'api::seite.seite'
    >;
  };
}

export interface ComponentsAddBanner extends Schema.Component {
  collectionName: 'components_components_add_banners';
  info: {
    displayName: 'Add Banner';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Untertitel: Attribute.String;
    link: Attribute.Relation<
      'components.add-banner',
      'oneToOne',
      'api::seite.seite'
    >;
    LinkText: Attribute.String;
  };
}

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
}

export interface ComponentsHauptteil extends Schema.Component {
  collectionName: 'components_components_hauptteils';
  info: {
    displayName: 'Hauptteil';
    description: '';
  };
  attributes: {
    Zusammenfassung: Attribute.Text;
    Standardkomponente: Attribute.Component<
      'components.standardkomponente',
      true
    >;
    Statische_Komponente: Attribute.Relation<
      'components.hauptteil',
      'oneToMany',
      'api::spezial-komponente.spezial-komponente'
    >;
    AdBanner: Attribute.Component<'components.add-banner', true>;
    AdBannerMitBild: Attribute.Component<
      'components.add-banner-mit-bild',
      true
    >;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Zusammenfassung: Attribute.Text;
    Bild: Attribute.Media;
    Link: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsKarriereVorteileAuflistung extends Schema.Component {
  collectionName: 'components_components_karriere_vorteile_auflistungs';
  info: {
    displayName: 'Karriere Vorteile Auflistung';
  };
  attributes: {
    Vorteil: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.Relation<'components.link', 'oneToOne', 'api::seite.seite'>;
  };
}

export interface ComponentsStandardkomponente extends Schema.Component {
  collectionName: 'components_components_standardkomponentes';
  info: {
    displayName: 'Standardkomponente';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.Text;
    Bild: Attribute.Media;
    Untertitlel: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.add-banner-mit-bild': ComponentsAddBannerMitBild;
      'components.add-banner': ComponentsAddBanner;
      'components.footer': ComponentsFooter;
      'components.hauptteil': ComponentsHauptteil;
      'components.header': ComponentsHeader;
      'components.karriere-vorteile-auflistung': ComponentsKarriereVorteileAuflistung;
      'components.link': ComponentsLink;
      'components.standardkomponente': ComponentsStandardkomponente;
    }
  }
}
