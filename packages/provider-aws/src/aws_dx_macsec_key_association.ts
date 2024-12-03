import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDxMacsecKeyAssociationArgs {
  cak?: string;
  connection_id: string;
}
export class aws_dx_macsec_key_association extends TerraformResource {
  readonly ckn?: string;
  readonly id?: string;
  readonly secret_arn?: string;
  readonly start_on!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxMacsecKeyAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_dx_macsec_key_association");
  }
}