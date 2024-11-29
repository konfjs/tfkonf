import { TerraformConfig, TerraformResource } from "tfs";
export interface GrpcHealthCheck {
  grpc_service_name?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
}
export interface Http2HealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}
export interface HttpHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}
export interface HttpsHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}
export interface LogConfig {
  enable?: boolean;
}
export interface SslHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}
export interface TcpHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  name: string;
  timeout_sec?: number;
  unhealthy_threshold?: number;
  grpc_health_check: GrpcHealthCheck;
  http2_health_check: Http2HealthCheck;
  http_health_check: HttpHealthCheck;
  https_health_check: HttpsHealthCheck;
  log_config: LogConfig;
  ssl_health_check: SslHealthCheck;
  tcp_health_check: TcpHealthCheck;
  timeouts: Timeouts;
}
export class google_compute_region_health_check extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionHealthCheckArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_health_check");
  }
}