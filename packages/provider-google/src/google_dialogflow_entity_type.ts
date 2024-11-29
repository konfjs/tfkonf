import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDialogflowEntityTypeArgsentities {
  synonyms: string[];
  value: string;
}
export interface GoogleDialogflowEntityTypeArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowEntityTypeArgs {
  display_name: string;
  enable_fuzzy_extraction?: boolean;
  kind: string;
  entities: GoogleDialogflowEntityTypeArgsentities;
  timeouts: GoogleDialogflowEntityTypeArgstimeouts;
}
export class google_dialogflow_entity_type extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowEntityTypeArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_entity_type");
  }
}