import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexAssetIamPolicyArgs {
  asset: string;
  dataplex_zone: string;
  lake: string;
  policy_data: string;
}
export class google_dataplex_asset_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAssetIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_asset_iam_policy");
  }
}