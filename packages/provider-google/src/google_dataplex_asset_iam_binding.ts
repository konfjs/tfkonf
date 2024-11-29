import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexAssetIamBindingArgscondition {
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
  condition: GoogleDataplexAssetIamBindingArgscondition;
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