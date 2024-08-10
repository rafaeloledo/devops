#include "catch.hpp"
#include "Usuario.hpp"


TEST_CASE("Usu�rio deve saber informar seu primeiro nome") {
	Usuario rafael("Rafael Ledo");

	std::string primeiroNome = rafael.getPrimeiroNome();

	REQUIRE("Rafael" == primeiroNome);
}