import { TerraformConfig, TerraformResource } from "tfs";
export interface Entities {
  synonyms?: string[];
  value?: string;
}
export interface ExcludedPhrases {
  value?: string;
}
export interface Timeouts {
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
  entities: Entities;
  excluded_phrases: ExcludedPhrases;
  timeouts: Timeouts;
}
export class google_dialogflow_cx_entity_type extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxEntityTypeArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_entity_type");
  }
}