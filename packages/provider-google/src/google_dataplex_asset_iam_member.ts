import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexAssetIamMemberArgs {
  asset: string;
  dataplex_zone: string;
  lake: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_dataplex_asset_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAssetIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_asset_iam_member");
  }
}