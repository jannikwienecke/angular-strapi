import type { Schema, Attribute } from '@strapi/strapi';

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
    spezial_komponentes: Attribute.Relation<
      'components.hauptteil',
      'oneToMany',
      'api::spezial-komponente.spezial-komponente'
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
      'components.footer': ComponentsFooter;
      'components.hauptteil': ComponentsHauptteil;
      'components.header': ComponentsHeader;
      'components.link': ComponentsLink;
      'components.standardkomponente': ComponentsStandardkomponente;
    }
  }
}
