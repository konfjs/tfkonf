import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexAssetIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexAssetIamBindingArgs {
  asset: string;
  dataplex_zone: string;
  lake: string;
  members: string[];
  role: string;
  condition: GoogleDataplexAssetIamBindingArgsCondition;
}

export class google_dataplex_asset_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAssetIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_asset_iam_binding");
  }
}
