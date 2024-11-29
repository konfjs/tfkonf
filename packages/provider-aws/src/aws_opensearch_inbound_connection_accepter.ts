import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOpensearchInboundConnectionAccepterArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsOpensearchInboundConnectionAccepterArgs {
  connection_id: string;
  timeouts: AwsOpensearchInboundConnectionAccepterArgstimeouts;
}
export class aws_opensearch_inbound_connection_accepter extends TerraformResource {
  readonly connection_status!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchInboundConnectionAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_inbound_connection_accepter");
  }
}