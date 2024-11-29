import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleEndpointsServiceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEndpointsServiceArgs {
  grpc_config?: string;
  openapi_config?: string;
  protoc_output_base64?: string;
  service_name: string;
  timeouts: GoogleEndpointsServiceArgstimeouts;
}
export class google_endpoints_service extends TerraformResource {
  readonly apis!: any[];
  readonly config_id!: string;
  readonly dns_address!: string;
  readonly endpoints!: any[];
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service");
  }
}