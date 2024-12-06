import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxEntityTypeArgsEntities {
  synonyms?: string[];
  value?: string;
}

export interface GoogleDialogflowCxEntityTypeArgsExcludedPhrases {
  value?: string;
}

export interface GoogleDialogflowCxEntityTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxEntityTypeArgs {
  auto_expansion_mode?: string;
  display_name: string;
  enable_fuzzy_extraction?: boolean;
  kind: string;
  language_code?: string;
  parent?: string;
  redact?: boolean;
  entities: GoogleDialogflowCxEntityTypeArgsEntities;
  excluded_phrases: GoogleDialogflowCxEntityTypeArgsExcludedPhrases;
  timeouts?: GoogleDialogflowCxEntityTypeArgsTimeouts;
}

export class google_dialogflow_cx_entity_type extends TerraformResource {
  readonly id?: string;
  readonly name!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxEntityTypeArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_entity_type");
  }
}
